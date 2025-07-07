// const express = require("express");
// const router = express.Router();
// const db = require("../db/connection"); 

// router.post("/add-product", (req, res) => {
//   const { product, price, state } = req.body;

//   if (!product || !price || !state) {
//     return res.status(400).json({ message: "All fields are required." });
//   }

//   const query = "INSERT INTO marketplace (product, price, state) VALUES (?, ?, ?)";
//   db.query(query, [product, price, state], (err, result) => {
//     if (err) {
//       console.error("DB Insert Error:", err);
//       return res.status(500).json({ message: "Database insert failed." });
//     }
//     res.status(201).json({ message: "Product added successfully!" });
//   });
// });

// router.get("/marketplace/all-products", async (req, res) => {
//   try {
//     const [rows] = await db.query("SELECT * FROM marketplace");
//     res.json(rows);
//   } catch (err) {
//     console.error("Error fetching products:", err);
//     res.status(500).json({ error: "Failed to fetch products" });
//   }
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const db = require("../db/connection"); // You should have a MySQL connection setup

// POST route to add product
router.post("/add-product", (req, res) => {
  const { product, price, state } = req.body;

  if (!product || !price || !state) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const query = "INSERT INTO marketplace (product, price, state) VALUES (?, ?, ?)";
  db.query(query, [product, price, state], (err, result) => {
    if (err) {
      console.error("DB Insert Error:", err);
      return res.status(500).json({ message: "Database insert failed." });
    }
    res.status(201).json({ message: "Product added successfully!" });
  });
});

// GET route to fetch all products - FIXED: removed extra "/marketplace"
router.get("/all-products", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM marketplace");
    res.json(rows);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

module.exports = router;