import os
import sqlite3
from pathlib import Path
from flask import g

BASE_DIR = Path(__file__).parent
DATABASE_PATH = Path(os.environ.get("DATABASE_PATH", os.environ.get("DATABASE_FILE", BASE_DIR / "db.sqlite3")))

def get_db():
    if "db" not in g:
        conn = sqlite3.connect(str(DATABASE_PATH))
        conn.row_factory = sqlite3.Row
        g.db = conn
    return g.db

def close_db(e=None):
    db = g.pop("db", None)
    if db is not None:
        db.close()