import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Home() {
  const [response, setResponse] = useState("");

  const handleClick = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/test");
      setResponse(res.data.message);
    } catch (err) {
      setResponse("Error calling API");
      console.error(err);
    }
  };
  return (
    <>
      <div className="div main_content">
        <h1>Welcome to Krishi Saathi</h1>
        <div className="container-elements">
          <div className="element">
            <img src="https://cdn-icons-png.flaticon.com/128/88/88506.png"></img>
            <h3>Ai- Based</h3>
            <h4>Crop Sugesstion</h4>
          </div>
          <div className="element e2">
            <img src="https://cdn-icons-png.flaticon.com/128/2957/2957990.png"></img>
            <h3>desesase</h3>
            <h4>detection</h4>
          </div>
          <div className="element">
            <img src="https://cdn-icons-png.flaticon.com/128/3721/3721843.png"></img>
            <h3>Regional language </h3>
            <h4>Chat bot</h4>
          </div>
          <div className="element e2">
            <img src="https://cdn-icons-png.flaticon.com/128/88/88506.png"></img>
            <h3>Ai- Based</h3>
            <h4>Crop Sugesstion</h4>
          </div>
          <div className="element">
            <img src="https://cdn-icons-png.flaticon.com/128/88/88506.png"></img>
            <h3>Ai- Based</h3>
            <h4>Crop Sugesstion</h4>
          </div>
          <div className="element e2">
            <img src="https://cdn-icons-png.flaticon.com/128/88/88506.png"></img>
            <h3>Ai- Based</h3>
            <h4>Crop Sugesstion</h4>
          </div>
        </div>
        <h1>Our services</h1>
        <div className="Our-services">
          <div className="card mb-3 " style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/88/88506.png"
                  className="img-fluid rounded-start"
                  alt="Icon"
                  width={100}
                  height={100}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  {<h5 className="card-title">Crop Disease detection</h5>}
                  <p className="card-text">
                    Identify plant desese from lesf image
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary"></small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/88/88506.png"
                  className="img-fluid rounded-start"
                  alt="Icon"
                  width={100}
                  height={100}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  {<h5 className="card-title">Crop Disease detection</h5>}
                  <p className="card-text">
                    Identify plant desese from lesf image
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary"></small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/88/88506.png"
                  className="img-fluid rounded-start"
                  alt="Icon"
                  width={100}
                  height={100}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  {<h5 className="card-title">Crop Disease detection</h5>}
                  <p className="card-text">
                    Identify plant desese from lesf image
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary"></small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/88/88506.png"
                  className="img-fluid rounded-start"
                  alt="Icon"
                  width={100}
                  height={100}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  {<h5 className="card-title">Crop Disease detection</h5>}
                  <p className="card-text">
                    Identify plant desese from lesf image
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary"></small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/88/88506.png"
                  className="img-fluid rounded-start"
                  alt="Icon"
                  width={100}
                  height={100}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  {<h5 className="card-title">Crop Disease detection</h5>}
                  <p className="card-text">
                    Identify plant desese from lesf image
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary"></small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/88/88506.png"
                  className="img-fluid rounded-start"
                  alt="Icon"
                  width={100}
                  height={100}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  {<h5 className="card-title">Crop Disease detection</h5>}
                  <p className="card-text">
                    Identify plant desese from lesf image
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary"></small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="buyer-cta">
          <h2>💬 “Want to buy fresh produce directly from farmers?”</h2>
          <h2>💬 “Looking for verified farmer listings in your area?”</h2>
          <h2>💬 “Apply for government subsidy programs for bulk purchase!”</h2>
          <p>Login as a buyer to access marketplace and government schemes.</p>
          <button onClick={() => window.location.href = "/buyer"}>Go to Buyer Login</button>
        </div>
        <button onClick={handleClick}>Call API</button>
        <p>{response}</p>
      </div>
    </>
  );
}
export default Home;
