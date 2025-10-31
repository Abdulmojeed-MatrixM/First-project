from flask import Flask, render_template
from database import init_db

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'dev-secret'  # replace from .env in production
    init_db()
    @app.route('/')
    def index():
        return render_template('index.html')
    return app

if __name__ == '__main__':
    create_app().run(debug=True)
