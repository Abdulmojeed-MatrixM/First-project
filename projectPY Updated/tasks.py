# tasks.py
from flask import Blueprint, render_template, request, redirect, url_for, session, flash, abort
from utils import get_db
from functools import wraps

tasks_bp = Blueprint("tasks", __name__, url_prefix="")

def login_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        if "user_id" not in session:
            flash("Please log in to continue.", "warning")
            return redirect(url_for("auth.login"))
        return f(*args, **kwargs)
    return decorated

@tasks_bp.route("/dashboard")
@login_required
def dashboard():
    db = get_db()
    user_id = session["user_id"]
    # simple list; later add filter / sort via query params
    rows = db.execute("SELECT * FROM tasks WHERE user_id = ? ORDER BY due_date", (user_id,)).fetchall()
    return render_template("dashboard.html", tasks=rows)

@tasks_bp.route("/tasks/new", methods=["GET", "POST"])
@login_required
def new_task():
    if request.method == "POST":
        title = request.form.get("title", "").strip()
        description = request.form.get("description", "").strip()
        due_date = request.form.get("due_date", "").strip()
        status = request.form.get("status", "Need to Complete")
        if not title:
            flash("Title is required.", "danger")
            return render_template("task_form.html")
        db = get_db()
        db.execute(
            "INSERT INTO tasks (user_id, title, description, due_date, status) VALUES (?, ?, ?, ?, ?)",
            (session["user_id"], title, description, due_date, status),
        )
        db.commit()
        flash("Task created.", "success")
        return redirect(url_for("tasks.dashboard"))
    return render_template("task_form.html")

@tasks_bp.route("/tasks/<int:task_id>/edit", methods=["GET", "POST"])
@login_required
def edit_task(task_id):
    db = get_db()
    row = db.execute("SELECT * FROM tasks WHERE id = ?", (task_id,)).fetchone()
    if not row:
        abort(404)
    if row["user_id"] != session["user_id"]:
        abort(403)
    if request.method == "POST":
        title = request.form.get("title", "").strip()
        description = request.form.get("description", "").strip()
        due_date = request.form.get("due_date", "").strip()
        status = request.form.get("status", "Need to Complete")
        if not title:
            flash("Title is required.", "danger")
            return render_template("task_form.html", task=row)
        db.execute(
            "UPDATE tasks SET title=?, description=?, due_date=?, status=? WHERE id=?",
            (title, description, due_date, status, task_id),
        )
        db.commit()
        flash("Task updated.", "success")
        return redirect(url_for("tasks.dashboard"))
    return render_template("task_form.html", task=row)

@tasks_bp.route("/tasks/<int:task_id>/delete", methods=["POST"])
@login_required
def delete_task(task_id):
    db = get_db()
    row = db.execute("SELECT * FROM tasks WHERE id = ?", (task_id,)).fetchone()
    if not row:
        abort(404)
    if row["user_id"] != session["user_id"]:
        abort(403)
    db.execute("DELETE FROM tasks WHERE id = ?", (task_id,))
    db.commit()
    flash("Task deleted.", "info")
    return redirect(url_for("tasks.dashboard"))
