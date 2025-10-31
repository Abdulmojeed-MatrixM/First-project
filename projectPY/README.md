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


**********************************
Development tips
Use the debugger only in development. Do not enable debug=True in production.
To inspect logs, run the server in the same terminal and watch stdout for tracebacks.
To add this folder to Git and push:

git add projectPY
git commit -m "Add projectPY"
git push origin main