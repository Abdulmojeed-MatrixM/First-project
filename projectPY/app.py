import os
import sqlite3
from flask import Flask, render_template, request, Response, abort, session, jsonify, redirect, url_for
from database import init_db
from utils import close_db
from auth import auth_bp
from tasks import tasks_bp
from dotenv import load_dotenv


load_dotenv()  # load .env if present

def create_app():
    # use absolute paths so templates/static are found regardless of CWD
    base_dir = os.path.dirname(os.path.abspath(__file__))
    templates_dir = os.path.join(base_dir, "templates")
    static_dir = os.path.join(base_dir, "static")

    app = Flask(__name__, template_folder=templates_dir, static_folder=static_dir)
    app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY", "dev-secret")
    # session cookie security recommendations (adjust for production)
    app.config["SESSION_COOKIE_HTTPONLY"] = True
    app.config["SESSION_COOKIE_SECURE"] = False  # set True in production (requires HTTPS)

    # initialize DB only if needed and avoid raising on startup
    try:
        # if your init_db requires app context or path change accordingly
        init_db()
    except Exception as e:
        # don't block server start; log for investigation
        app.logger.warning("init_db() failed on startup: %s", e)

     # register blueprints if available
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
    
    # Simple session-based admin login (API)
    # Recommended: use HTTPS and stronger auth in production
    @app.route("/admin/login", methods=["POST"])
    def admin_login():
        """
        Accepts JSON { "username": "...", "password": "..." } or form data.
        First checks ADMIN_USER/ADMIN_PASS from env. If matched, sets session['admin'] = True.
        """
        data = request.get_json(silent=True) or request.form
        username = data.get("username")
        password = data.get("password")

        # Check environment admin credentials first
        env_user = os.environ.get("ADMIN_USER")
        env_pass = os.environ.get("ADMIN_PASS")
        if env_user and env_pass and username == env_user and password == env_pass:
            session["admin"] = True
            return jsonify({"status": "ok", "message": "admin logged in"}), 200

        # Optionally check users table for an is_admin flag (non-sensitive check).
        # This assumes 'users' table has a column 'is_admin' (0/1) and 'password' stored hashed.
        # If your project uses hashed passwords, integrate the same verification here.
        db_path = os.environ.get("DATABASE_FILE", os.path.join(base_dir, "db.sqlite3"))
        try:
            conn = sqlite3.connect(db_path)
            conn.row_factory = sqlite3.Row
            cur = conn.cursor()
            cur.execute("SELECT id, username, password, is_admin FROM users WHERE username = ?", (username,))
            row = cur.fetchone()
            conn.close()
            if row and row["is_admin"]:
                # NOTE: replace plaintext check with your password hashing verification
                if password and password == row["password"]:
                    session["admin"] = True
                    return jsonify({"status": "ok", "message": "admin logged in"}), 200
        except Exception as e:
            app.logger.debug("admin login db check failed: %s", e)

        return jsonify({"status": "unauthorized"}), 401

    @app.route("/admin/logout", methods=["POST", "GET"])
    def admin_logout():
        session.pop("admin", None)
        # if called from browser, redirect to index
        if request.method == "GET":
            return redirect(url_for("index"))
        return jsonify({"status": "ok", "message": "logged out"}), 200

    @app.route("/admin/export-users")
    def admin_export_users():
        """
        Streams a CSV of user data — protected by session['admin'].
        Only exports non-sensitive fields. Use HTTPS in production.
        """
        if not session.get("admin"):
            abort(403)

        db_path = os.environ.get("DATABASE_FILE", os.path.join(base_dir, "db.sqlite3"))
        try:
            conn = sqlite3.connect(db_path)
            conn.row_factory = sqlite3.Row
            cur = conn.cursor()
            # Adjust columns below to match your users table.
            cur.execute("SELECT id, username, email, created_at FROM users")
            rows = cur.fetchall()
            conn.close()
        except Exception as e:
            app.logger.error("Failed to read users for export: %s", e)
            abort(500)

        def generate():
            yield "id,username,email,created_at\n"
            for r in rows:
                # basic CSV escaping for commas/quotes
                uid = r["id"]
                username = str(r["username"]).replace('"', '""')
                email = str(r["email"]).replace('"', '""')
                created = str(r["created_at"])
                yield f'{uid},"{username}","{email}",{created}\n'

        return Response(generate(), mimetype="text/csv",
                        headers={"Content-Disposition": "attachment; filename=users.csv"})


    return app

if __name__ == "__main__":
    # run from project root; explicit host/port optional
    app = create_app()
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True, host="127.0.0.1", port=port)