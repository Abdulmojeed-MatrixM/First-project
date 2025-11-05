# tests/test_app.py
import pytest
from utils import get_db
from werkzeug.security import generate_password_hash

def register(client, username="user1", email="user1@example.com", password="pass"):
    return client.post("/register", data={"username": username, "email": email, "password": password}, follow_redirects=True)

def login(client, email="user1@example.com", password="pass"):
    return client.post("/login", data={"email": email, "password": password}, follow_redirects=True)

def test_register_and_login(client):
    rv = register(client)
    assert b"Account created" in rv.data or b"Please log in" in rv.data or b"Registered" in rv.data
    rv2 = login(client)
    assert b"Login successful" in rv2.data or b"Dashboard" in rv2.data

def test_create_task_requires_login(client):
    # cannot access dashboard without login
    rv = client.get("/dashboard", follow_redirects=True)
    assert b"Please log in" in rv.data or b"Login" in rv.data

def test_task_crud_flow(client):
    register(client)
    login(client)
    # create task
    rv = client.post("/tasks/new", data={"title":"Test Task","description":"Desc","due_date":"2025-01-01","status":"Need to Complete"}, follow_redirects=True)
    assert b"Task created" in rv.data or b"Your Tasks" in rv.data
    # check dashboard lists it
    rv2 = client.get("/dashboard")
    assert b"Test Task" in rv2.data
    # edit - find id in DB
    db = get_db()
    row = db.execute("SELECT id FROM tasks WHERE title = ?", ("Test Task",)).fetchone()
    assert row is not None
    task_id = row["id"]
    rv3 = client.post(f"/tasks/{task_id}/edit", data={"title":"Test Task Edited","description":"New","due_date":"2025-02-02","status":"In Progress"}, follow_redirects=True)
    assert b"Task updated" in rv3.data or b"Test Task Edited" in rv3.data
    # delete
    rv4 = client.post(f"/tasks/{task_id}/delete", follow_redirects=True)
    assert b"Task deleted" in rv4.data or b"no tasks" in rv4.data or b"Your Tasks" in rv4.data

def test_duplicate_registration(client):
    register(client, username="dup", email="dup@example.com", password="x")
    rv = register(client, username="dup", email="dup@example.com", password="x")
    assert b"exists" in rv.data or b"already" in rv.data
