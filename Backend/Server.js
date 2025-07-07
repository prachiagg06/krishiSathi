const express = require("express");
require("dotenv").config();
// const db = require("./db/connection");
const cors = require('cors');
const multer = require("multer");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


app.get("/api/test", (req, res) => {
  res.json({ message: "API is working!" });
});

const diseaseRoutes = require("./routes/diseaseRoutes");
app.use("/api", diseaseRoutes);

const cropRoutes = require("./routes/cropRoutes"); 
app.use("/api", cropRoutes); 

const marketplaceRoutes = require("./routes/marketplaceRoutes");
app.use("/api/marketplace", marketplaceRoutes);

// const marketplaceRoutes = require("./routes/marketplaceRoutes");
// app.use("/api/marketplace", marketplaceRoutes);

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
