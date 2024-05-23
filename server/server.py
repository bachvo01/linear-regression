from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import pickle
import numpy as np

app = Flask(__name__)
cors = CORS(app)
# Load linear regression model
with open('salary_model.pkl', 'rb') as file:
    model = pickle.load(file)

# Example input for prediction
# years_of_experience = np.array([[5]])

# # Make a prediction
# predicted_salary = model.predict(years_of_experience)
# print(f"Predicted Salary for 5 years of experience: ${predicted_salary[0]:.2f}")

@app.route('/', methods=['GET'])
def test():
    data = {
        'status' : 'OK',
        'message' : 'Hello there!'
    }
    return jsonify(data)

@app.route('/predict', methods=['POST'])
@cross_origin()
def predict():
    data = request.get_json(force=True)
    years_of_experience = np.array([[data['years_of_experience']]])
    prediction = model.predict(years_of_experience)
    print(years_of_experience)
    return jsonify({'predicted_salary' : prediction[0]})

if __name__ == '__main__':
    port = 5000
    print(f"App is running at PORT {port}")
    app.run(port = port,debug=True)
    