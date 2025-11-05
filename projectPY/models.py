from dataclasses import dataclass
from typing import Optional

@dataclass
class User:
    id: Optional[int]
    username: str
    email: Optional[str]
    password_hash: str
    is_admin: bool = False
    created_at: Optional[str] = None

@dataclass
class Task:
    id: Optional[int]
    user_id: int
    title: str
    description: Optional[str] = None
    due_date: Optional[str] = None
    status: str = "Need to Complete"