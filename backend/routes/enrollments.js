const express = require("express");
const Enrollment = require("../models/Enrollment");

const router = express.Router();

// Enroll student
router.post("/", async (req, res) => {
  try {
    const enrollment = await Enrollment.create(req.body);
    res.json(enrollment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get student enrollments
router.get("/:studentId", async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ studentId: req.params.studentId }).populate("courseId");
    res.json(enrollments);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
