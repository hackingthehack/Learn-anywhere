const express = require("express");
const multer = require("multer");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

// Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage });

// Upload video
router.post("/video", authMiddleware, upload.single("video"), (req, res) => {
  res.json({ url: `http://localhost:4000/uploads/${req.file.filename}` });
});

// Upload document
router.post("/doc", authMiddleware, upload.single("doc"), (req, res) => {
  res.json({ url: `http://localhost:4000/uploads/${req.file.filename}` });
});

module.exports = router;
