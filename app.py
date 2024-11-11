from flask import Flask, request, jsonify
import joblib  # or import pickle if you used it for saving the model
import numpy as np

app = Flask(__name__)

# Load your ML model(s)
model_full = joblib.load('CropRecs(main).joblib')  # Replace with your model's filename
model_soil_type = joblib.load('CropRecs(backUp).joblib')  # Replace with the soil type model

# Endpoint for full soil data inputs
@app.route('/predict', methods=['POST'])
def predict_full():
    print("Received POST request at /predict")
    data = request.json
    # Prepare data as expected by the model
    input_data = np.array([data['nitrogen'], data['phosphorus'], data['potassium'], data['rainfall'], data['ph'], data['temperature'], data['humidity']]).reshape(1, -1)
    prediction = model_full.predict(input_data)
    return jsonify({'recommended_crop': prediction[0]})

# Endpoint for soil type only
@app.route('/predict/soil-type', methods=['POST'])
def predict_soil_type():
    print("Received POST request at /predict/soil-type")
    data = request.json
    # Prepare the data as needed for soil-type based predictions
    input_data = np.array([data['soil_type']]).reshape(1, -1)  # Adjust input format based on the model
    prediction = model_soil_type.predict(input_data)
    return jsonify({'recommended_crop': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)


