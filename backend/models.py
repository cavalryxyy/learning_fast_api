from pydantic import BaseModel

class CalculationRequest(BaseModel):
    option1: int
    option2: int
    option3: int
