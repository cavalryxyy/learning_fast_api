# backend/calculator.py
from backend.models import CalculationRequest
import json

# Load configuration file
with open('backend/config.json') as config_file:
    config = json.load(config_file)
weights = config['weights']['calculation1']  # Use the appropriate calculation weights

def calculate_weighted_average(request: CalculationRequest, 
                               weights : dict = config['weights']['calculation1']):
    total_weight = weights['weight1'] + weights['weight2'] + weights['weight3']
    weighted_sum = (
        request.option1 * weights['weight1'] +
        request.option2 * weights['weight2'] +
        request.option3 * weights['weight3']
    )
    weighted_average = weighted_sum / total_weight
    return {"weighted_average": weighted_average}
