import "../App.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function BuyerLogin(){

   const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
     if (username === "buyer123@gmail.com" && password === "123") {
      localStorage.setItem("isBuyer", "true");
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
    
  };
  return(
    
    <>
    <div className="login_page">
      <h1>Buyer's Login</h1>
      <div className="login_container">
        <input type="email" placeholder="Email" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSubmit}>Login</button>
        <div className="login_cred">
          <h3>Login Credentials</h3>
          <p>buyer123@gmail.com / 123</p>
        </div>
      </div>
    </div>
    </>
  )

}
export default BuyerLogin;