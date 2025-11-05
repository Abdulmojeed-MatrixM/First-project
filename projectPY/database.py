import os
import sqlite3
from pathlib import Path

# Use a consistent env var name
BASE_DIR = Path(__file__).parent
DATABASE_PATH = Path(os.environ.get("DATABASE_PATH", os.environ.get("DATABASE_FILE", BASE_DIR / "db.sqlite3")))

def get_connection():
    conn = sqlite3.connect(str(DATABASE_PATH))
    conn.row_factory = sqlite3.Row
    return conn

def _table_has_column(conn, table: str, column: str) -> bool:
    cur = conn.execute(f"PRAGMA table_info({table})")
    cols = [row["name"] for row in cur.fetchall()]
    return column in cols

def init_db():
    """
    Create or migrate database schema to expected structure.
    Safe to call on every startup.
    """
    DATABASE_PATH.parent.mkdir(parents=True, exist_ok=True)
    conn = get_connection()
    cur = conn.cursor()

    # Create users table if missing (schema expected by auth.py)
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

    # Create tasks table if missing (schema expected by tasks.py)
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

    # Migrate existing users table columns if older schema exists
    # Add columns if missing (SQLite allows ADD COLUMN)
    if not _table_has_column(conn, "users", "email"):
        try:
            cur.execute("ALTER TABLE users ADD COLUMN email TEXT")
        except sqlite3.OperationalError:
            pass
    if not _table_has_column(conn, "users", "password_hash"):
        # if old column 'password' exists, copy to password_hash (no hashing)
        if _table_has_column(conn, "users", "password"):
            # rename old column logic is complex in sqlite; best-effort: add new column
            try:
                cur.execute("ALTER TABLE users ADD COLUMN password_hash TEXT")
                # attempt to copy values (best-effort)
                cur.execute("UPDATE users SET password_hash = password WHERE password_hash IS NULL")
            except sqlite3.OperationalError:
                pass
        else:
            try:
                cur.execute("ALTER TABLE users ADD COLUMN password_hash TEXT")
            except sqlite3.OperationalError:
                pass
    if not _table_has_column(conn, "users", "is_admin"):
        try:
            cur.execute("ALTER TABLE users ADD COLUMN is_admin INTEGER DEFAULT 0")
        except sqlite3.OperationalError:
            pass
    if not _table_has_column(conn, "users", "created_at"):
        try:
            cur.execute("ALTER TABLE users ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
        except sqlite3.OperationalError:
            pass

    # Migrate tasks table columns
    if not _table_has_column(conn, "tasks", "due_date"):
        try:
            cur.execute("ALTER TABLE tasks ADD COLUMN due_date TEXT")
        except sqlite3.OperationalError:
            pass
    if not _table_has_column(conn, "tasks", "status"):
        try:
            cur.execute("ALTER TABLE tasks ADD COLUMN status TEXT DEFAULT 'Need to Complete'")
        except sqlite3.OperationalError:
            pass

    conn.commit()
    conn.close()