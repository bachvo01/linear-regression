from flask import Flask, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)

# Load linear regression model
with open('salary_model.pkl', 'rb') as file:
    model = pickle.load(file)

# Example input for prediction
# years_of_experience = np.array([[5]])

# # Make a prediction
# predicted_salary = model.predict(years_of_experience)
# print(f"Predicted Salary for 5 years of experience: ${predicted_salary[0]:.2f}")

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    years_of_experience = np.array([[data['years_of_experience']]])
    prediction = model.predict(years_of_experience)
    return jsonify({'predicted_salary' : prediction[0]})

if __name__ == '__main__':
    app.run(port=5000,debug=True)
    print("app is running at PORT {port}")