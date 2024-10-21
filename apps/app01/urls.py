from fastapi import APIRouter

user = APIRouter()

@user.post("/user/login")
def user_login():
    return {"user": "login"}

@user.post("/user/register")
def user_register():
    return {"user": "register"}