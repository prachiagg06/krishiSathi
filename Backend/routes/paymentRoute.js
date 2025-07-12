const express = require("express");
const router = express.Router();
const db = require("../db/connection");
const Razorpay = require("razorpay");

// Razorpay instance
const razorpay = new Razorpay({
  key_id: "rzp_test_j3dYWKRUu4qxU8",
  key_secret: "eKKbsdD2olnjMVbdkv7Cpkmm",
});

// @route    POST /api/payment/create-order
router.post("/create-order", async (req, res) => {
  const { amount } = req.body;

  if (!amount || typeof amount !== "number") {
    return res.status(400).json({ error: "Invalid amount" });
  }

  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, // Razorpay expects amount in paisa
      currency: "INR",
      receipt: "receipt_" + Math.floor(Math.random() * 100000),
    });

    const sql = `
      INSERT INTO orders (razorpay_order_id, amount, currency, receipt, status)
      VALUES (?, ?, ?, ?, 'CREATED')
    `;
    const values = [order.id, order.amount, order.currency, order.receipt];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("❌ DB Insert Error:", err);
        return res.status(500).json({ error: "Database insert failed" });
      }

      console.log("📝 Order saved to DB:", result.insertId);
      res.json(order);
    });
  } catch (error) {
    console.error("❌ Razorpay Error:", error);
    res.status(500).json({ error: "Order creation failed" });
  }
});

// @route    POST /api/payment/update-order
router.post("/update-order", (req, res) => {
  const { order_id, status, payment_id } = req.body;

  if (!order_id || !status || !payment_id) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const sql = `
    UPDATE orders
    SET status = ?, razorpay_payment_id = ?
    WHERE razorpay_order_id = ?
  `;
  db.query(sql, [status, payment_id, order_id], (err, result) => {
    if (err) {
      console.error("❌ DB Update Error:", err);
      return res.status(500).json({ error: "Failed to update order" });
    }

    console.log("✅ Order updated:", order_id, "→", status);
    res.json({ success: true });
  });
});

module.exports = router;
