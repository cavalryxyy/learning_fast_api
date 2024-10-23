from fastapi import APIRouter

shop = APIRouter()

@shop.get("/food")
def user_login():
    return {"shop": "food"}

@shop.get("/bed")
def user_register():
    return {"shop": "bed"}