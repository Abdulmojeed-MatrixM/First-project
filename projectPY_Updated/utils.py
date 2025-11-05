import os
import sqlite3
from pathlib import Path
from flask import g, current_app

BASE_DIR = Path(__file__).parent
DEFAULT_DB_PATH = Path(os.environ.get("DATABASE_PATH", os.environ.get("DATABASE_FILE", BASE_DIR / "db.sqlite3")))

def _resolve_db_path():
    try:
        cfg = current_app.config if current_app else {}
        if cfg:
            cfg_path = cfg.get("DATABASE") or cfg.get("DATABASE_PATH")
            if cfg_path:
                return Path(cfg_path)
    except Exception:
        pass
    return Path(DEFAULT_DB_PATH)

def get_db():
    if "db" not in g:
        db_path = _resolve_db_path()
        db_path.parent.mkdir(parents=True, exist_ok=True)
        conn = sqlite3.connect(str(db_path))
        conn.row_factory = sqlite3.Row
        g.db = conn
    return g.db

def close_db(e=None):
    db = g.pop("db", None)
    if db is not None:
        db.close()