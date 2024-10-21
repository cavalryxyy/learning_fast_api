from fastapi import FastAPI
import uvicorn
from apps.app01.urls import user
from apps.app02.urls import shop

app = FastAPI()

app.include_router(shop, 
                   prefix="/shop", 
                   tags=["shop info"])

app.include_router(user, 
                   prefix="/user", 
                   tags=["user info"])

if __name__ == "__main__":
    uvicorn.run(app=app, host="0.0.0.0", port=8000, reload=True)