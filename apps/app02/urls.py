from fastapi import APIRouter

shop = APIRouter()

@shop.get("/shop/food")
def user_login():
    return {"shop": "food"}

@shop.get("/shop/bed")
def user_register():
    return {"shop": "bed"}