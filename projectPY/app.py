# app.py
import os
from flask import Flask, render_template
from database import init_db
from utils import close_db
from auth import auth_bp
from tasks import tasks_bp
from dotenv import load_dotenv

load_dotenv()  # load .env if present

def create_app():
    app = Flask(__name__, template_folder="templates")
    app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY", "dev-secret")
    # init DB files
    init_db()
    # register blueprints
    app.register_blueprint(auth_bp)
    app.register_blueprint(tasks_bp)

    app.teardown_appcontext(close_db)

    @app.route("/")
    def index():
        return render_template("index.html")

    return app

if __name__ == "__main__":
    create_app().run(debug=True)
