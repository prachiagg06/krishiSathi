// console.log("Server file is being executed");
// const express = require("express");
// const dotenv = require("dotenv");

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.send("Server is up and running!");
// });

// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });
const express = require("express");
require("dotenv").config();
const db = require("./db/connection");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/test-db", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT NOW() AS time");
    res.send(`DB Connected! Current Time: ${rows[0].time}`);
  } catch (err) {
    console.error("DB error:", err);
    res.status(500).send("Database connection failed");
  }
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
