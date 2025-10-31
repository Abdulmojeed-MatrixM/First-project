# tests/conftest.py
import os
import tempfile
import pytest
from app import create_app
from database import init_db
import sqlite3

@pytest.fixture
def client(tmp_path, monkeypatch):
    # create a temporary DB file
    db_file = tmp_path / "test_db.sqlite3"
    os.environ["DATABASE_PATH"] = str(db_file)
    # initialize DB schema
    init_db()
    app = create_app()
    app.config["TESTING"] = True
    with app.test_client() as client:
        yield client
