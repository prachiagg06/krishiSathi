// import "../App.css";
// import { useState } from "react";
// import axios from "axios"; 
// import { useEffect } from "react"; 

// const states = [
//   "Select state", "Andhra Pradesh", "Bihar", "Delhi", "Gujarat", "Haryana",
//   "Karnataka", "Madhya Pradesh", "Maharashtra", "Punjab", "Rajasthan",
//   "Tamil Nadu", "Uttar Pradesh", "West Bengal"
// ];

// function MarketPlace() {
//   const [product, setProduct] = useState("");
//   const [price, setPrice] = useState("");
//   const [state, setState] = useState(states[0]);
//   const [entries, setEntries] = useState([]);

//   useEffect(() => {
//     const fetchEntries = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/marketplace/all-products");
//         setEntries(res.data); 
//       } catch (err) {
//         console.error("Failed to fetch products:", err);
//       }
//     };

//     fetchEntries();
//   }, []);


// const handleAdd = async () => {
//   if (!product || !price || state === "Select state") {
//     alert("⚠️ Please fill all fields!");
//     return;
//   }

//   try {
//     console.log("📤 Submitting product..."); 

//     const res = await axios.post("http://localhost:5000/api/marketplace/add-product", {
//       product,
//       price,
//       state,
//     });

//     console.log("✅ Response received:", res.data); 

//     alert("✅ Product added successfully!");

//     const newEntry = { product, price, state };
//     setEntries([...entries, newEntry]);

//     setProduct("");
//     setPrice("");
//     setState(states[0]);
//   } catch (err) {
//     console.error("❌ Error while adding product:", err); 
//     alert("Failed to add product. Please try again.");
//   }
// };

//   return (
//     <div className="main_content marketplace">
//       <h2>🧺 Farmer Product Listing</h2>

//       <div className="form-container">
//         <input
//           type="text"
//           placeholder="Product Name"
//           value={product}
//           onChange={(e) => setProduct(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Price (₹)"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//         />
//         <select value={state} onChange={(e) => setState(e.target.value)}>
//           {states.map((s, idx) => (
//             <option key={idx} value={s}>{s}</option>
//           ))}
//         </select>
//         <button onClick={handleAdd}>List Product</button>
//       </div>

//       <table className="product-table">
//         <thead>
//           <tr>
//             <th>Sl. No.</th>
//             <th>Product</th>
//             <th>Price (₹)</th>
//             <th>State</th>
//           </tr>
//         </thead>
//         <tbody>
//           {entries.map((entry, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>{entry.product}</td>
//               <td>{entry.price}</td>
//               <td>{entry.state}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default MarketPlace;








// import "../App.css";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const states = [
//   "Select state", "Andhra Pradesh", "Bihar", "Delhi", "Gujarat", "Haryana",
//   "Karnataka", "Madhya Pradesh", "Maharashtra", "Punjab", "Rajasthan",
//   "Tamil Nadu", "Uttar Pradesh", "West Bengal"
// ];

// function MarketPlace() {
//   const [product, setProduct] = useState("");
//   const [price, setPrice] = useState("");
//   const [state, setState] = useState(states[0]);
//   const [entries, setEntries] = useState([]);


//   const fetchEntries = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/marketplace/all-products");
//       setEntries(res.data); 
//     } catch (err) {
//       console.error("❌ Failed to fetch products:", err);
//     }
//   };

//   useEffect(() => {
//     fetchEntries();
//   }, []);

  
//   const handleAdd = async () => {
//     if (!product || !price || state === "Select state") {
//       alert("⚠️ Please fill all fields!");
//       return;
//     }

//     try {
//       console.log("📤 Submitting product...");

//       const res = await axios.post("http://localhost:5000/api/marketplace/add-product", {
//         product,
//         price,
//         state,
//       });

//       console.log("✅ Response received:", res.data);

//       alert("✅ Product added successfully!");

      
//       await fetchEntries();

     
//       setProduct("");
//       setPrice("");
//       setState(states[0]);
//     } catch (err) {
//       console.error("❌ Error while adding product:", err);
//       alert("Failed to add product. Please try again.");
//     }
//   };

//   return (
//     <div className="main_content marketplace">
//       <h2>🧺 Farmer Product Listing</h2>

//       <div className="form-container">
//         <input
//           type="text"
//           placeholder="Product Name"
//           value={product}
//           onChange={(e) => setProduct(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Price (₹)"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//         />
//         <select value={state} onChange={(e) => setState(e.target.value)}>
//           {states.map((s, idx) => (
//             <option key={idx} value={s}>{s}</option>
//           ))}
//         </select>
//         <button onClick={handleAdd}>List Product</button>
//       </div>

//       <table className="product-table">
//         <thead>
//           <tr>
//             <th>Sl. No.</th>
//             <th>Product</th>
//             <th>Price (₹)</th>
//             <th>State</th>
//           </tr>
//         </thead>
//         <tbody>
//           {entries.map((entry, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>{entry.product}</td>
//               <td>{entry.price}</td>
//               <td>{entry.state}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default MarketPlace;




import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";

const states = [
  "Select state", "Andhra Pradesh", "Bihar", "Delhi", "Gujarat", "Haryana",
  "Karnataka", "Madhya Pradesh", "Maharashtra", "Punjab", "Rajasthan",
  "Tamil Nadu", "Uttar Pradesh", "West Bengal"
];

function MarketPlace() {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [state, setState] = useState(states[0]);
  const [entries, setEntries] = useState([]);

  // Load entries from localStorage on first load
  useEffect(() => {
    const stored = localStorage.getItem("productEntries");
    if (stored) {
      setEntries(JSON.parse(stored));
    }
  }, []);

  const handleAdd = async () => {
    if (!product || !price || state === "Select state") {
      alert("⚠️ Please fill all fields!");
      return;
    }

    try {
      // Send to backend
      await axios.post("http://localhost:5000/api/marketplace/add-product", {
        product,
        price,
        state,
      });

      // Prepare new entry
      const newEntry = { product, price, state };

      // Update UI
      const updatedEntries = [...entries, newEntry];
      setEntries(updatedEntries);

      // Save to localStorage
      localStorage.setItem("productEntries", JSON.stringify(updatedEntries));

      alert("✅ Product added successfully!");

      // Reset form
      setProduct("");
      setPrice("");
      setState(states[0]);
    } catch (err) {
      console.error("❌ Error while adding product:", err);
      alert("Failed to add product. Please try again.");
    }
  };

  return (
    <div className="main_content marketplace">
      <h2>🧺 Farmer Product Listing</h2>

      <div className="form-container">
        <input
          type="text"
          placeholder="Product Name"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price (₹)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <select value={state} onChange={(e) => setState(e.target.value)}>
          {states.map((s, idx) => (
            <option key={idx} value={s}>{s}</option>
          ))}
        </select>
        <button onClick={handleAdd}>List Product</button>
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>Product</th>
            <th>Price (₹)</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{entry.product}</td>
              <td>{entry.price}</td>
              <td>{entry.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MarketPlace;
