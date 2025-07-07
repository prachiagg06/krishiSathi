const express = require("express");
const router = express.Router();
const multer = require("multer");

// Store images in /uploads temporarily
const storage = multer.memoryStorage(); // You can use diskStorage if needed
const upload = multer({ storage });

// POST endpoint to receive image
router.post("/crop-prediction", upload.single("image"), (req, res) => {
  try {
    // const imageBuffer = req.file.buffer;

    // Here you'd pass the imageBuffer to your ML model
    // For now, we’ll return a fake prediction
    // e.g., const result = await detectDiseaseFromImage(imageBuffer);
    const result = "Leafy vegetables";  // Dummy result

    res.json({ result });
  } catch (err) {
    console.error("Error processing image:", err);
    res.status(500).json({ error: "Failed to process image" });
  }
});

module.exports = router;
