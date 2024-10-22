from pydantic import BaseModel
from typing import Optional

class User(BaseModel):
    username: str
    email: str
    password: str
    is_admin: Optional[bool] = False

class UserInDB(User):
    hashed_password: str
