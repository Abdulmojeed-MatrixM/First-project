# auth.py
import os
import sqlite3
from flask import Blueprint, render_template, request, redirect, url_for, flash, session, current_app
from werkzeug.security import generate_password_hash, check_password_hash
from utils import get_db

auth_bp = Blueprint("auth", __name__)

TEST_DEBUG = os.environ.get("TEST_DEBUG") == "1"

@auth_bp.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        data = request.get_json(silent=True) or request.form
        username = (data.get("username") or "").strip()
        password = data.get("password") or ""
        email = (data.get("email") or "").strip() or None

        if not username or not password:
            msg = "Username and password required"
            flash(msg, "error")
            # Return login page with message so tests see a consistent page
            return render_template("login.html", message=msg)

        db = get_db()
        try:
            db.execute(
                "INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)",
                (username, email, generate_password_hash(password)),
            )
            db.commit()
            msg = "Account created"
            flash(msg, "success")
            return render_template("login.html", message=msg)
        except sqlite3.IntegrityError:
            # user exists -> show login with an informative message
            msg = "User already exists. Please log in"
            flash(msg, "info")
            return render_template("login.html", message=msg)

    return render_template("register.html")


@auth_bp.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        data = request.get_json(silent=True) or request.form
        username = (data.get("username") or "").strip()
        password = data.get("password") or ""

        if not username or not password:
            msg = "Username and password required"
            flash(msg, "error")
            return render_template("login.html", message=msg)

        db = get_db()
        cur = db.execute("SELECT id, username, password_hash, is_admin FROM users WHERE username = ?", (username,))
        user = cur.fetchone()

        # Debug logging
        if TEST_DEBUG or current_app.debug:
            current_app.logger.debug("Login attempt for username=%s user_found=%s", username, bool(user))
            if user:
                current_app.logger.debug("password_hash_present=%s", bool(user.get("password_hash")))

        pw_ok = False
        if user and user.get("password_hash"):
            try:
                pw_ok = check_password_hash(user["password_hash"], password)
            except Exception as e:
                if TEST_DEBUG or current_app.debug:
                    current_app.logger.debug("check_password_hash error: %s", e)
                pw_ok = False

        if user and pw_ok:
            session.clear()
            session["user_id"] = user["id"]
            session["username"] = user["username"]
            if user["is_admin"]:
                session["admin"] = True

            msg = "Login successful"
            flash(msg, "success")
            # Fetch tasks for dashboard
            cur = db.execute("SELECT * FROM tasks WHERE user_id = ? ORDER BY id DESC", (user["id"],))
            tasks = cur.fetchall()

            # optionally include debug block in response for temporary inspection
            debug_block = None
            if TEST_DEBUG:
                debug_block = f"DEBUG: user_found={bool(user)}, pw_ok={pw_ok}"
            return render_template("dashboard.html", message=msg, tasks=tasks, debug_block=debug_block)

        msg = "Invalid credentials"
        flash(msg, "error")
        # include debug when enabled
        debug_block = None
        if TEST_DEBUG:
            debug_block = f"DEBUG: user_found={bool(user)}, pw_ok={pw_ok}"
        return render_template("login.html", message=msg, debug_block=debug_block)

    return render_template("login.html")


@auth_bp.route("/logout")
def logout():
    session.clear()
    flash("You have been logged out.", "info")
    return redirect(url_for("index"))