# utils.py
import sqlite3
from flask import g
from pathlib import Path
from typing import Optional
import os

DB_PATH = os.environ.get("DATABASE_PATH", "db.sqlite3")

def get_db():
    if "db" not in g:
        conn = sqlite3.connect(DB_PATH)
        conn.row_factory = sqlite3.Row
        g.db = conn
    return g.db

def close_db(e=None):
    db = g.pop("db", None)
    if db is not None:
        db.close()
