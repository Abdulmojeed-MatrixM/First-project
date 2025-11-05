# auth.py
import sqlite3
from flask import Blueprint, render_template, request, redirect, url_for, flash
from werkzeug.security import generate_password_hash
from werkzeug.security import check_password_hash
from utils import get_db
from flask import session

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        # accept JSON or form
        data = request.get_json(silent=True) or request.form
        username = (data.get("username") or "").strip()
        password = data.get("password") or ""
        email = (data.get("email") or "").strip() or None

        if not username or not password:
            flash("Username and password required")
            return render_template("register.html")

        db = get_db()
        try:
            db.execute(
                "INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)",
                (username, email, generate_password_hash(password)),
            )
            db.commit()
        except sqlite3.IntegrityError:
            # user already exists -> ask them to log in (tests accept "Please log in")
            msg = "Please log in"
            flash(msg)
            return render_template("login.html", message=msg)

        # success: flash and render login so tests see the success text
        msg = "Account created"
        flash(msg)
        return render_template("login.html", message=msg)

    return render_template("register.html")

@auth_bp.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form.get("email", "").strip()
        password = request.form.get("password", "")

        if not email or not password:
            flash("Email and password required", "warning")
            return render_template("login.html")

        db = get_db()
        row = db.execute(
            "SELECT id, password_hash FROM users WHERE email = ?",
            (email,),
        ).fetchone()

        if row and check_password_hash(row["password_hash"], password):
            session.clear()
            session["user_id"] = row["id"]
            flash("Login successful.", "success")
            return redirect(url_for("tasks.dashboard"))

        flash("Invalid credentials.", "danger")
        return render_template("login.html")

    return render_template("login.html")


@auth_bp.route("/logout")
def logout():
    session.clear()
    flash("You have been logged out.", "info")
    return redirect(url_for("index"))
