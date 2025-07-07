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

      </div>
    </>
  );
}
export default Home;
