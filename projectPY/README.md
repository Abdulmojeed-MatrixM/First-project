# ProjectPY — Task Management (Flask)

*************************

Providing database setup instructions

I want to make sure I highlight the alternative to "flask run." We need to provide clear instructions for resetting the database, which involves deleting db.sqlite3 and running the app to recreate it. The database initialization code should handle table creation, and I previously included sample init_db code. In the repository, there's a database.py file, and I should mention running tests to create a test DB. Alright, I'll put this all together in a concise Markdown code block with a filepath comment.

************************

Lightweight Flask task-management app. This README explains how to set up, run, test, and troubleshoot the application on Windows.

---


## Overview

- Flask app using SQLite (`db.sqlite3`).
- Blueprints: authentication and tasks.
- Templates in `templates/`, static assets in `static/`.
- Tests under `tests/`.

---

## Prerequisites

- Python 3.10+ installed
- Git (optional)
- PowerShell (instructions use PowerShell)
- Recommended: use the included virtual environment `venv` or create a new one

---

## Quick setup (Windows PowerShell)

1. Open PowerShell and change to project folder:
```powershell
cd C:\WorkSpace\projectPY

2. Create and activate a venv (if not present):
python -m venv venv
[Activate.ps1](http://_vscodecontentref_/1)


3. Install dependencies:
pip install --upgrade pip
pip install -r requirements.txt


4. (Optional) Create a .env file or set environment variables:
Example .env keys:
SECRET_KEY=your-secret
PORT=5000
DATABASE_FILE=db.sqlite3



## backup if needed
del [db.sqlite3](http://_vscodecontentref_/2)
python app.py
# stop the server after startup to keep the database (Ctrl+C)


Run the application
From project root with venv activated:

python app.py

******************************
Open browser: http://127.0.0.1:5000

Alternative (Flask CLI):

$env:FLASK_APP="app.py"
$env:FLASK_ENV="development"
flask run

******************************
Run tests
With venv active:

pip install pytest
pytest -q


********************************
Usage:

Register a new user via Register link.

Login with your email and password.

Create tasks from the Add Task button in the Dashboard.

Edit or delete tasks from the Dashboard.

Running Tests

This project includes basic tests using pytest. To run tests:

Ensure your virtual environment is activated.

Run:

*******************************
Project layout
C:\WorkSpace\projectPY
├─ app.py
├─ database.py
├─ auth.py
├─ tasks.py
├─ utils.py
├─ [db.sqlite3](http://_vscodecontentref_/3)
├─ requirements.txt
├─ static/
└─ templates/

*******************************
Common issues & fixes
TemplateNotFound: ensure templates/index.html exists and you run from project root. The app sets absolute template/static folders in create_app() — run python app.py from project root.
Missing dependencies: run pip install -r requirements.txt.
Virtualenv not activated: Activate .\venv\Scripts\Activate.ps1 (PowerShell) or .\venv\Scripts\activate (cmd).
Database issues: delete db.sqlite3 to recreate, or inspect database.py for path logic.
Port already in use: change PORT env var or stop other service.

SQLite file not found / permission issues
Ensure DATABASE_PATH is writable by the process and the path exists.

Secret key errors / session not persisting
Set a secure SECRET_KEY in .env and restart the app.

Port already in use
Use export FLASK_RUN_PORT=5001 (mac/linux) or change the app.run() port in app.py.

Tests failing
Make sure you installed dev dependencies (pytest) and that you have not accidentally reused the production database in tests.

**********************************
Configuration

DATABASE_PATH (in .env) — path to SQLite database file. Default: db.sqlite3.

SECRET_KEY — Flask secret key for sessions and CSRF protection (set this to a secure random value).


**************************************

Development tips
Use the debugger only in development. Do not enable debug=True in production.
To inspect logs, run the server in the same terminal and watch stdout for tracebacks.
To add this folder to Git and push:

git add projectPY
git commit -m "Add projectPY"
git push origin main


****************************************
Acknowledgements

Built with Flask
 and SQLite

UI styled with Tailwind CSS
 via CDN for convenience


*********************************
```

## Database migration / tests (quick)

If you had an older DB schema (tests failed because columns missing) you can either let init_db() migrate in-place, or create a fresh DB:

To create a fresh DB (recommended for tests/dev):
```powershell
# from project root
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
del db.sqlite3      # Windows PowerShell; or move a backup copy
python app.py       # will create db.sqlite3 with correct schema
```

## Admin user / login

Use environment credentials or users table (with is_admin flag and hashed passwords).

To set env admin (quick):
- Copy .env.example -> .env and set ADMIN_USER and ADMIN_PASS.

Start server:
```powershell
.\venv\Scripts\Activate.ps1
python app.py
```

Login (PowerShell):
```powershell
$session = New-Object Microsoft.PowerShell.Commands.WebRequestSession
Invoke-RestMethod -Uri 'http://127.0.0.1:5000/admin/login' -Method Post -Body (@{ username='admin'; password='strongpassword'} | ConvertTo-Json) -ContentType 'application/json' -WebSession $session
Invoke-WebRequest -Uri 'http://127.0.0.1:5000/admin/export-users' -OutFile .\users.csv -WebSession $session
```

Security notes:
- Admin DB authentication expects password_hash in `users.password_hash` and verifies with werkzeug.security.check_password_hash. If you import users from older systems, ensure passwords are hashed using generate_password_hash before importing.