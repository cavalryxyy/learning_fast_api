from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List

router = APIRouter()

# 模拟数据库中的用户数据
users_db = [
    {"username": "user1", "role": "user"},
    {"username": "user2", "role": "user"},
    {"username": "admin", "role": "admin"}
]

class User(BaseModel):
    username: str
    role: str

class UserUpdateRequest(BaseModel):
    username: str
    new_role: str

class LoginRequest(BaseModel):
    username: str
    password: str

@router.get("/users", response_model=List[User])
def get_users():
    return users_db

@router.post("/users", response_model=User)
def create_user(user: User):
    if any(u['username'] == user.username for u in users_db):
        raise HTTPException(status_code=400, detail="Username already exists")
    users_db.append(user.dict())
    return user

@router.put("/users", response_model=User)
def update_user_role(request: UserUpdateRequest):
    for user in users_db:
        if user['username'] == request.username:
            user['role'] = request.new_role
            return user
    raise HTTPException(status_code=404, detail="User not found")

@router.delete("/users/{username}", response_model=User)
def delete_user(username: str):
    for user in users_db:
        if user['username'] == username:
            users_db.remove(user)
            return user
    raise HTTPException(status_code=404, detail="User not found")

@router.post("/login")
def login(request: LoginRequest):
    for user in users_db:
        if user['username'] == request.username:
            # 简单的密码验证逻辑
            if request.password == "password":  # 这里可以替换为更复杂的密码验证逻辑
                return {"username": user['username'], "role": user['role']}
            else:
                raise HTTPException(status_code=400, detail="Incorrect password")
    raise HTTPException(status_code=404, detail="User not found")
