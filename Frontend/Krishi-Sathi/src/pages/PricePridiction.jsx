<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const indianStates = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh",
  "Dadra and Nagar Haveli and Daman and Diu", "Delhi(NCR)", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir",
  "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
  "Uttarakhand", "West Bengal",
=======
import React, { useState } from "react";
import "../App.css"; // or "./PricePrediction.css" if using separate CSS

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
>>>>>>> 370878ca1b764b20437e0288b91b396de284a3f0
];

function PricePrediction() {
  const [crop, setCrop] = useState("");
  const [state, setState] = useState("");
  const [predictedPrice, setPredictedPrice] = useState(null);
  const [predictionDate, setPredictionDate] = useState("");

  const handlePredict = async () => {
    if (!crop || !state) {
      alert("⚠️ Please enter crop name and select a state.");
      return;
    }

    try {
      // Placeholder for AI model API call
      // const response = await axios.post("http://localhost:5000/api/predict-price", { crop, state });
      // const { price } = response.data;

      const fakePrice = 2750; // Placeholder for now
      setPredictedPrice(fakePrice);
      const today = new Date();
      const formatted = today.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
      setPredictionDate(formatted);
    } catch (err) {
      console.error("Error fetching prediction:", err);
      alert("Prediction failed.");
    }
  };

  return (
    <div className="price-prediction-page">
      <h1>🌾 Price Prediction</h1>

      <div className="prediction-form">
        <input
          type="text"
          placeholder="Enter crop name (e.g., Wheat)"
          value={crop}
          onChange={(e) => setCrop(e.target.value)}
        />

        <select value={state} onChange={(e) => setState(e.target.value)}>
          <option value="">Select state</option>
          {indianStates.map((s, idx) => (
            <option key={idx} value={s}>
              {s}
            </option>
          ))}
        </select>

        <button onClick={handlePredict}>Predict Price</button>
      </div>

      {predictedPrice && (
        <div className="prediction-result">
          📊 The estimated price of <strong>{crop}</strong> in{" "}
          <strong>{state}</strong> is:
          <div
            style={{ fontSize: "24px", fontWeight: "bold", marginTop: "6px" }}
          >
            ₹ {predictedPrice} / quintal
          </div>
          <div style={{ fontSize: "14px", marginTop: "4px", color: "#718096" }}>
            (Predicted on: {predictionDate})
          </div>
        </div>
      )}
    </div>
  );
}

export default PricePrediction;
