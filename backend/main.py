from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.users import router as user_router  # Use absolute import
from backend.models import CalculationRequest  # Import the CalculationRequest model
from fastapi import APIRouter
from backend.calculator import calculate_weighted_average

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",  # Local development URL
        "https://ashy-dune-0bad17903.5.azurestaticapps.net"  # Azure Static Web App URL
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user_router, prefix="/auth", tags=["auth"])

# Create a new router for the calculation endpoint
calc_router = APIRouter()

@calc_router.post("/calculate")
def calculate_endpoint(request: CalculationRequest):
    print("Received request:", request.dict())  # Log the received request as a dictionary
    result = calculate_weighted_average(request)
    print(f"Calculation result: {result}")  # Add this line
    return result  # Use the new function

app.include_router(calc_router, prefix="/calc", tags=["calc"])

@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI application!"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.main:app", host="127.0.0.1", port=8080, reload=True)
