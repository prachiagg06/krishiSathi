const express = require("express");
require("dotenv").config();
// const db = require("./db/connection");
const cors = require('cors');
const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());


app.get("/api/test", (req, res) => {
  res.json({ message: "API is working!" });
});

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
