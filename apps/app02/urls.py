from fastapi import APIRouter

shop = APIRouter()

@shop.food("/shop/food")
def user_login():
    return {"shop": "food"}

@shop.bed("/shop/bed")
def user_register():
    return {"shop": "bed"}