# tasks.py
import sqlite3
from flask import Blueprint, render_template, request, flash, session, redirect, url_for
from utils import get_db

tasks_bp = Blueprint("tasks", __name__, url_prefix="/tasks")

@tasks_bp.route("/", methods=["GET"])
def list_tasks():
    db = get_db()
    user_id = session.get("user_id")
    if user_id:
        cur = db.execute("SELECT * FROM tasks WHERE user_id = ? ORDER BY id DESC", (user_id,))
    else:
        cur = db.execute("SELECT * FROM tasks ORDER BY id DESC")
    tasks = cur.fetchall()
    return render_template("dashboard.html", tasks=tasks)

@tasks_bp.route("/new", methods=["GET", "POST"])
def create_task():
    if request.method == "POST":
        title = (request.form.get("title") or "").strip()
        description = request.form.get("description") or None
        due_date = request.form.get("due_date") or None
        status = request.form.get("status") or "Need to Complete"
        user_id = session.get("user_id")
        if not user_id:
            # if not logged in, redirect to login
            flash("Please log in", "info")
            return redirect(url_for("auth.login"))

        if not title:
            msg = "Title required"
            flash(msg, "error")
            return render_template("task_form.html", message=msg)

        db = get_db()
        db.execute(
            "INSERT INTO tasks (user_id, title, description, due_date, status) VALUES (?, ?, ?, ?, ?)",
            (user_id, title, description, due_date, status),
        )
        db.commit()

        msg = "Task created"
        flash(msg, "success")
        # show updated dashboard
        cur = db.execute("SELECT * FROM tasks WHERE user_id = ? ORDER BY id DESC", (user_id,))
        tasks = cur.fetchall()
        return render_template("dashboard.html", message=msg, tasks=tasks)

    return render_template("task_form.html")
