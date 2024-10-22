from fastapi import APIRouter

user = APIRouter()

@user.post("/login")
def user_login():
    return {"user": "login"}

@user.post("/register")
def user_register():
    return {"user": "register"}