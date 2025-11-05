import os
import sqlite3
from pathlib import Path

BASE_DIR = Path(__file__).parent
# prefer env var DATABASE_PATH (standardized)
DATABASE_PATH = Path(os.environ.get("DATABASE_PATH", os.environ.get("DATABASE_FILE", BASE_DIR / "db.sqlite3")))

def _resolve_db_path():
    """
    Prefer Flask app config 'DATABASE' or 'DATABASE_PATH' when available,
    else use module-level DATABASE_PATH.
    """
    try:
        from flask import current_app
        cfg = current_app.config
        if cfg:
            cfg_path = cfg.get("DATABASE") or cfg.get("DATABASE_PATH")
            if cfg_path:
                return Path(cfg_path)
    except Exception:
        pass
    return Path(DATABASE_PATH)

def get_connection():
    db_path = _resolve_db_path()
    db_path.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(str(db_path))
    conn.row_factory = sqlite3.Row
    return conn

def _table_has_column(conn, table: str, column: str) -> bool:
    cur = conn.execute(f"PRAGMA table_info({table})")
    cols = [row["name"] for row in cur.fetchall()]
    return column in cols

def init_db():
    """
    Create or migrate database schema to the shape expected by the app.
    Safe to call on every startup; uses app config DATABASE when available.
    """
    db_path = _resolve_db_path()
    db_path.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(str(db_path))
    conn.row_factory = sqlite3.Row
    cur = conn.cursor()

    # Users table expected by auth.py
    cur.execute("""
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE,
        password_hash TEXT NOT NULL,
        is_admin INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """)

    # Tasks table expected by tasks.py
    cur.execute("""
    CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        title TEXT NOT NULL,
        description TEXT,
        due_date TEXT,
        status TEXT DEFAULT 'Need to Complete',
        FOREIGN KEY (user_id) REFERENCES users (id)
    );
    """)

    # Add compatibility: add missing columns if older schema exists
    try:
        if not _table_has_column(conn, "users", "email"):
            cur.execute("ALTER TABLE users ADD COLUMN email TEXT")
    except sqlite3.OperationalError:
        pass
    try:
        if not _table_has_column(conn, "users", "password_hash"):
            cur.execute("ALTER TABLE users ADD COLUMN password_hash TEXT")
    except sqlite3.OperationalError:
        pass
    try:
        if not _table_has_column(conn, "users", "is_admin"):
            cur.execute("ALTER TABLE users ADD COLUMN is_admin INTEGER DEFAULT 0")
    except sqlite3.OperationalError:
        pass
    try:
        if not _table_has_column(conn, "users", "created_at"):
            cur.execute("ALTER TABLE users ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    except sqlite3.OperationalError:
        pass
    try:
        if not _table_has_column(conn, "tasks", "due_date"):
            cur.execute("ALTER TABLE tasks ADD COLUMN due_date TEXT")
    except sqlite3.OperationalError:
        pass
    try:
        if not _table_has_column(conn, "tasks", "status"):
            cur.execute("ALTER TABLE tasks ADD COLUMN status TEXT DEFAULT 'Need to Complete'")
    except sqlite3.OperationalError:
        pass

    conn.commit()
    conn.close()