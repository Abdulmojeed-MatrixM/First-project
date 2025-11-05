import csv
import os
import sqlite3
from pathlib import Path

BASE = Path(__file__).parent
DB_PATH = Path(os.environ.get("DATABASE_PATH", os.environ.get("DATABASE_FILE", BASE / "db.sqlite3")))
OUT_CSV = BASE / "users_export.csv"

def export_users(out_path: Path = OUT_CSV):
    if not DB_PATH.exists():
        print(f"Database not found at {DB_PATH}")
        return 1

    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cur = conn.cursor()

    cur.execute("SELECT id, username, email, created_at FROM users")
    rows = cur.fetchall()

    with out_path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["id", "username", "email", "created_at"])
        for r in rows:
            writer.writerow([r["id"], r["username"], r["email"], r["created_at"]])

    conn.close()
    print(f"Exported {len(rows)} users to {out_path}")
    return 0

if __name__ == "__main__":
    exit(export_users())