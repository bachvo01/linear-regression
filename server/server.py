from flask import Flask, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)

# Load linear regression model
with open('salary_model.pkl', 'rb') as file:
    model = pickle.load(file)

# Example input for prediction
years_of_experience = np.array([[5]])

# Make a prediction
predicted_salary = model.predict(years_of_experience)
print(f"Predicted Salary for 5 years of experience: ${predicted_salary[0]:.2f}")

