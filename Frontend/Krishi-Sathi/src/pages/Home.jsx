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
<<<<<<< HEAD
        <h1>HELLO DEVANSH</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
          tenetur? Blanditiis, ratione quibusdam reiciendis officia omnis fugit
          quae consectetur commodi impedit cumque corrupti molestiae unde nobis
          est sapiente dolorem laudantium molestias provident fuga beatae ipsum
          veritatis magni atque! Quas est id vero nesciunt quasi omnis, enim
          harum in earum rerum possimus commodi corporis ea molestias deserunt
          tenetur aliquam eum neque, velit cupiditate unde obcaecati voluptas
          quisquam. Itaque sint quisquam unde enim similique hic accusantium
          nemo fugiat, odit ratione iste odio. Maiores voluptatum dolorem natus
          dignissimos laboriosam quisquam magnam debitis temporibus esse, et,
          accusantium qui sapiente quae voluptas vero totam reiciendis.
        </p>
         <button onClick={handleClick}>Call API</button>
         <p>{response}</p>


         <div className="buyer-cta">
  <h2>💬 “Want to buy fresh produce directly from farmers?”</h2>
  <h2>💬 “Looking for verified farmer listings in your area?”</h2>
  <h2>💬 “Apply for government subsidy programs for bulk purchase!”</h2>
  <p>Login as a buyer to access marketplace and government schemes.</p>
  <button onClick={() => window.location.href = "/buyer"}>Go to Buyer Login</button>



</div>

=======
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
        <p></p>
        <button onClick={handleClick}>Call API</button>
        <p>{response}</p>cd
>>>>>>> 335e2a24a0e6eae14c204a580a2930df0a5f6753
      </div>
    </>
  );
}
export default Home;
