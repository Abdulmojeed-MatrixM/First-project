import os
from flask import Flask, render_template
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

    # initialize DB only if needed and avoid raising on startup
    try:
        # if your init_db requires app context or path change accordingly
        init_db()
    except Exception as e:
        # don't block server start; log for investigation
        app.logger.warning("init_db() failed on startup: %s", e)

    # register blueprints
    app.register_blueprint(auth_bp)
    app.register_blueprint(tasks_bp)

    app.teardown_appcontext(close_db)

    @app.route("/")
    def index():
        return render_template("index.html")

    return app

if __name__ == "__main__":
    # run from project root; explicit host/port optional
    app = create_app()
    app.run(debug=True, host="127.0.0.1", port=int(os.environ.get("PORT", 5000)))