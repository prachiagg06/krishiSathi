import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Chatbot from "./pages/Chatbot";
import CropPrediction from "./pages/CropPrediction";
import Government from "./pages/Government";
import MarketPlace from "./pages/marketplace.jsx";
import PricePridiction from "./pages/PricePridiction";
import CropDisease from "./pages/CropDisease.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
<<<<<<< HEAD
import BuyerLogin from './pages/BuyerLogin.jsx';
import AccessGuard from "./components/AccessGuard";
import NotAuthorized from "./pages/NotAuthorized";

function App() {

//   useEffect(() => {
//   const buyerFlag = localStorage.getItem("isBuyer");
//   setIsBuyer(buyerFlag === "true"); 
// }, []);
const [isBuyer, setIsBuyer] = useState(() => {
  return localStorage.getItem("isBuyer") === "true";
});
  
=======
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
>>>>>>> d87189428e3a76054b2a26608773e279339b1cb1
  return (
    <>
      <BrowserRouter>
        <div className="home_page">
          <div className="nav_bar">
            <div
              class="d-flex flex-column flex-shrink-0 p-3 text-white "
              style={{ width: "250px", height: "100vh" }}
            >
              <a
                href="/"
                class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span class="fs-4">Krishi Saathi</span>
              </a>
              <hr />
              <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                  <a href="/" class="nav-link  text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/CropDisease" class="nav-link text-white">
                    Crop Disease
                  </a>
                </li>
                <li>
                  <a href="/CropPrediction" class="nav-link text-white">
                    Crop Prediction
                  </a>
                </li>
                <li>
                  {/* file name here  */}
                  <a href="/PricePridiction" class="nav-link text-white">
                    Price Prediction
                  </a>
                </li>
                <li>
                  <a href="/marketplace" class="nav-link text-white">
                    Marketplace
                  </a>
                </li>
                <li>
                  <a href="/Chatbot" class="nav-link text-white">
                    Chatbot
                  </a>
                </li>
                <li>
                  <a href="/Government" class="nav-link text-white">
                    Government subsidy
                  </a>
                </li>
              </ul>
              <hr />
              <div>
<<<<<<< HEAD
                <button
  onClick={() => {
    localStorage.removeItem("isBuyer");
    setIsBuyer(false);
  }}
  className="nav-link text-white"
  style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
>
  Logout
</button>

              </div>
              <div>
                <a href="/Contact" class="nav-link text-white">Contact Us</a>
=======
                <a href="/Contact" class="nav-link text-white">
                  Contact Us
                </a>
>>>>>>> d87189428e3a76054b2a26608773e279339b1cb1
              </div>
            </div>
          </div>
          <div className="main_content">
            <Routes>
              {/* function name here */}
              <Route path="/marketplace" element={<MarketPlace />} />
              <Route path="/PricePridiction"element={
  <AccessGuard><PricePridiction /></AccessGuard>
} />
              <Route path="/Chatbot" element={
  <AccessGuard><Chatbot /></AccessGuard>
} />
              <Route path="/CropPrediction" element={
  <AccessGuard><CropPrediction /></AccessGuard>
} />
              <Route path="/CropDisease" element={
  <AccessGuard><CropDisease /></AccessGuard>
} />
              <Route path="/Government" element={<Government />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/" element={<Home />} />
              <Route path="/buyer" element={<BuyerLogin/>}></Route>
              <Route path="/not-authorized" element={<NotAuthorized />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
