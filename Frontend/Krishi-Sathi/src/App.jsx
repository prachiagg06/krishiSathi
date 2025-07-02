import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Chatbot from "./pages/Chatbot"
import CropPrediction from "./pages/CropPrediction"
import Government from "./pages/Government"
import MarketPlace from "./pages/marketplace.jsx"
import PricePridiction from "./pages/PricePridiction"
import CropDisease from './pages/CropDisease.jsx';
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";

function App() {
  const [msg, setMsg] = useState("");

  // const handleClick = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:5000/api/test");
  //     setResponse(res.data.message);
  //   } catch (err) {
  //     setResponse("Error calling API");
  //     console.error(err);
  //   }
  // };

  return (
    <>
      <BrowserRouter>
        <div className="home_page">
          <div className="nav_bar">
            <div class="d-flex flex-column flex-shrink-0 p-3 text-white " style={{ width: "250px", height: "100vh" }}>
              <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span class="fs-4">Krishi Saathi</span>
              </a>
              <hr />
              <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                  <a href="/" class="nav-link  text-white">Home</a>
                </li>
                <li>
                  <a href="/CropDisease" class="nav-link text-white">Crop Disease</a>
                </li>
                <li>
                  <a href="/CropPrediction" class="nav-link text-white">Crop Prediction</a>
                </li>
                <li>
                  {/* file name here  */}
                  <a href="/PricePridiction" class="nav-link text-white">Price Prediction</a>
                </li>
                <li>
                  <a href="/marketplace" class="nav-link text-white">Marketplace</a>
                </li>
                <li>
                  <a href="/Chatbot" class="nav-link text-white">Chatbot</a>
                </li>
                <li>
                  <a href="/Government" class="nav-link text-white">Government subsidy</a>
                </li>
              </ul>
              <hr />
              <div>
                <a href="/Contact" class="nav-link text-white">Contact Us</a>
              </div>
            </div>
          </div>
          <div className="main_content" >
            <Routes>
              {/* function name here */}
              <Route path="/marketplace" element={<MarketPlace />} />
              <Route path="/PricePridiction" element={<PricePridiction />} />
              <Route path="/Chatbot" element={<Chatbot />} />
              <Route path="/CropPrediction" element={<CropPrediction />} />
              <Route path="/CropDisease" element={<CropDisease />} />
              <Route path="/Government" element={<Government />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>


    </>
  )
}

export default App;
