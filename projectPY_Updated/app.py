import os
import sqlite3
from flask import Flask, render_template, request, Response, abort, session, jsonify, redirect, url_for
from dotenv import load_dotenv
from werkzeug.security import check_password_hash

from database import init_db, get_connection, DATABASE_PATH  # get_connection optional
from utils import close_db
from auth import auth_bp
from tasks import tasks_bp

load_dotenv()

def create_app():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    templates_dir = os.path.join(base_dir, "templates")
    static_dir = os.path.join(base_dir, "static")

    app = Flask(__name__, template_folder=templates_dir, static_folder=static_dir)
    app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY", "dev-secret")
    app.config["SESSION_COOKIE_HTTPONLY"] = True
    app.config["SESSION_COOKIE_SECURE"] = os.environ.get("SESSION_COOKIE_SECURE", "False").lower() in ("1","true","yes")

    # initialize DB safely
    try:
        init_db()
    except Exception as e:
        app.logger.warning("init_db() failed on startup: %s", e)

    # register blueprints
    try:
        app.register_blueprint(auth_bp)
    except Exception:
        app.logger.debug("auth_bp not registered; check auth.py")

    try:
        app.register_blueprint(tasks_bp)
    except Exception:
        app.logger.debug("tasks_bp not registered; check tasks.py")

    app.teardown_appcontext(close_db)

    @app.route("/")
    def index():
        return render_template("index.html")

    @app.route("/admin/login", methods=["POST"])
    def admin_login():
        data = request.get_json(silent=True) or request.form
        username = data.get("username")
        password = data.get("password")

        # Environment-based admin (fast path)
        env_user = os.environ.get("ADMIN_USER")
        env_pass = os.environ.get("ADMIN_PASS")
        if env_user and env_pass and username == env_user and password == env_pass:
            session["admin"] = True
            return jsonify({"status": "ok", "message": "admin logged in"}), 200

        # Database-based admin auth (uses password_hash)
        db_path = os.environ.get("DATABASE_PATH", os.environ.get("DATABASE_FILE", os.path.join(base_dir, "db.sqlite3")))
        try:
            conn = sqlite3.connect(db_path)
            conn.row_factory = sqlite3.Row
            cur = conn.cursor()
            cur.execute("SELECT id, username, password_hash, is_admin FROM users WHERE username = ?", (username,))
            row = cur.fetchone()
            conn.close()
            if row and row["is_admin"]:
                # Use check_password_hash for verification
                if password and check_password_hash(row["password_hash"], password):
                    session["admin"] = True
                    return jsonify({"status": "ok", "message": "admin logged in"}), 200
        except Exception as e:
            app.logger.debug("admin login db check failed: %s", e)

        return jsonify({"status": "unauthorized"}), 401

    @app.route("/admin/logout", methods=["POST", "GET"])
    def admin_logout():
        session.pop("admin", None)
        if request.method == "GET":
            return redirect(url_for("index"))
        return jsonify({"status": "ok", "message": "logged out"}), 200

    @app.route("/admin/export-users")
    def admin_export_users():
        if not session.get("admin"):
            abort(403)

        db_path = os.environ.get("DATABASE_PATH", os.environ.get("DATABASE_FILE", os.path.join(base_dir, "db.sqlite3")))
        try:
            conn = sqlite3.connect(db_path)
            conn.row_factory = sqlite3.Row
            cur = conn.cursor()
            cur.execute("SELECT id, username, email, created_at FROM users")
            rows = cur.fetchall()
            conn.close()
        except Exception as e:
            app.logger.error("Failed to read users for export: %s", e)
            abort(500)

        def generate():
            yield "id,username,email,created_at\n"
            for r in rows:
                uid = r["id"]
                username = str(r["username"]).replace('"', '""')
                email = str(r["email"]).replace('"', '""')
                created = str(r["created_at"])
                yield f'{uid},"{username}","{email}",{created}\n'

        return Response(generate(), mimetype="text/csv",
                        headers={"Content-Disposition": "attachment; filename=users.csv"})

    return app

if __name__ == "__main__":
    app = create_app()
    # Use FLASK_DEBUG or default to False (do not run debug in production)
    debug = os.environ.get("FLASK_DEBUG", "False").lower() in ("1", "true", "yes")
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=debug, host="127.0.0.1", port=port)