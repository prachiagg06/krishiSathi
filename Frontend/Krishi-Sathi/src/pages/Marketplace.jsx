import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Payment from "../components/Payment";

const states = [
  "Select state",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Delhi(NCR)",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

function MarketPlace() {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [state, setState] = useState(states[0]);
  const [entries, setEntries] = useState([]);
  const [filterState, setFilterState] = useState(states[0]); // For filtering

  // Fetch products (filtered by state if selected)
 const fetchEntries = async (selectedState = states[0]) => {
  try {
    let url = "http://localhost:5000/api/marketplace/all-products";
    if (selectedState && selectedState !== "Select state") {
      url += `?state=${encodeURIComponent(selectedState)}`;
    }
    console.log("Fetching:", url); // <-- add this
    const res = await axios.get(url);
    setEntries(res.data);
  } catch (err) {
    console.error("Failed to fetch products:", err);
  }
};


  // Fetch all or filtered entries on mount and when filterState changes
  useEffect(() => {
    fetchEntries(filterState);
  }, [filterState]);

  // Add product handler
  const handleAdd = async () => {
    if (!product || !price || state === "Select state") {
      alert("⚠️ Please fill all fields!");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/marketplace/add-products", {
        product,
        price,
        state,
      });

      alert("✅ Product added successfully!");
      // Refresh the list (respecting current filter)
      fetchEntries(filterState);

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

      {/* Buyer Filter */}
      <div className="filter-container" style={{ margin: "1em 0" }}>
        <label htmlFor="state-filter">Filter by State: </label>
        <select
          id="state-filter"
          value={filterState}
          onChange={(e) => setFilterState(e.target.value)}
        >
          {states.map((s, idx) => (
            <option key={idx} value={s}>{s}</option>
          ))}
        </select>
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
      <Payment></Payment>
    </div>
  );
}

export default MarketPlace;
