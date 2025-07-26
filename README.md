🌾 Krishi Sathi – Empowering Farmers with AI & Technology
Krishi Sathi is an AI-powered AgriTech web application built to support and uplift Indian farmers. It provides an intuitive digital platform where farmers can list their produce, check dynamic market prices, and access relevant government subsidies—all while leveraging AI-powered insights for smarter agriculture.

🚀 Live Demo: (Insert deployed URL if hosted)

📸 Preview:
(Screenshots or demo GIFs here)

🧠 Features
🔹 AI Integration

Crop price prediction using AI and market trends

Chatbot assistant to help users navigate features
Crop prediction based on soil iamge 
Predict crop desease based on the image uploaded

🛒 Marketplace

Farmers can list their products (name, price, and state)

Products are stored in a SQL database

Listing updated in real time (stored in local storage)

📊 Dynamic Product Table

Sl. No.

Product Name

Price (₹)

State

Automatically updated upon listing

🏛 Government Subsidy Page (Planned/Future Scope)

Subsidy schemes listed by state and crop type

Eligibility filter based on user input

Downloadable PDFs and scheme links

🔐 Authentication (Optional/Future Scope)

Role-based login (Farmer, Officer/Admin)

Session management and user-specific listings

🛠️ Tech Stack
Frontend: React.js, HTML, CSS (Bootstrap), Axios

Backend: Node.js, Express.js

Database: MySQL (XAMPP / phpMyAdmin)

AI Integration: (Specify your AI logic—e.g., Python model or third-party API)



💻 Local Setup Instructions
Clone the repo:

git clone https://github.com/your-username/krishi-sathi.git
cd krishi-sathi

Set up the backend:

Navigate to /server

Run:
npm install
node server.js
python server.py

(Ensure MySQL is running through XAMPP)

Set up the frontend:

cd Frontend/Krishi-Sathi
npm install
npm run dev

Update .env (if applicable):

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=Farmers

🗂️ Project Structure

Krishi-Sathi/
├── Frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Marketplace.jsx
│   │   │   └── Subsidy.jsx (optional)
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── index.css
├── server/
│   ├── routes/
│   │   ├── marketplaceRoutes.js
│   ├── controllers/
│   ├── db.js
│   └── index.js
└── README.md

🔁 API Endpoints
📍 Marketplace

POST /api/marketplace/add-product
→ Adds new product to database and localStorage

GET /api/marketplace/buyerlogin/priceprediction/chatbot/all-products
→ Fetches all products from database

Example POST payload:
{
  "product": "Wheat",
  "price": "2500",
  "state": "Punjab"
}

🧠 AI Features (Describe Logic)
Chatbot: Built using basic state management with potential for Dialogflow/GemenAI  integration

Price Prediction: Based on historical dataset or hardcoded values with future scope for ML model integration


currently it is version 1.0.0 ( in which only one language is supported and 50 key features and is does not give the cure after detecting the desease )
we are working one version 2 it will come soon in which (multi language feature is available and and also give the cure of the disease) 










