document.addEventListener('DOMContentLoaded', function () {
    const fullInputForm = document.getElementById('fullInputForm');
    if (fullInputForm) {
        fullInputForm.onsubmit = async function (event) {
            event.preventDefault();
            const inputData = {
                nitrogen: document.getElementById('nitrogen').value,
                phosphorus: document.getElementById('phosphorus').value,
                potassium: document.getElementById('potassium').value,
                rainfall: document.getElementById('rainfall').value,
                ph: document.getElementById('ph').value,
                temperature: document.getElementById('temperature').value,
                humidity: document.getElementById('humidity').value
            };
            try {
                const response = await fetch('http://127.0.0.1:8000/predict', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(inputData)
                });
                if (response.ok) {
                    const result = await response.json();
                    document.getElementById('predictionResult').innerText = "Recommended Crop: " + result.recommended_crop;
                } else {
                    console.error('Server error:', response.statusText);
                    document.getElementById('predictionResult').innerText = "Error: Unable to get recommendation.";
                }
            } catch (error) {
                console.error('Fetch error:', error);
                document.getElementById('predictionResult').innerText = "Error: Unable to connect to server.";
            }
        };
    }

    const soilTypeForm = document.getElementById('soilTypeForm');
    if (soilTypeForm) {
        soilTypeForm.onsubmit = async function (event) {
            event.preventDefault();
            const soilData = {
                soil_type: document.getElementById('soil_type').value
            };
            try {
                const response = await fetch('http://127.0.0.1:8000/predict/soil-type', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(soilData)
                });
                if (response.ok) {
                    const result = await response.json();
                    document.getElementById('predictionResult').innerText = "Recommended Crop: " + result.recommended_crop;
                } else {
                    console.error('Server error:', response.statusText);
                    document.getElementById('predictionResult').innerText = "Error: Unable to get recommendation.";
                }
            } catch (error) {
                console.error('Fetch error:', error);
                document.getElementById('predictionResult').innerText = "Error: Unable to connect to server.";
            }
        };
    }
});
