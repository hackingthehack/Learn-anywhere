const express = require("express");
const Course = require("../models/Course");

const router = express.Router();

// Create course (tutor)
router.post("/", async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find().populate("tutorId", "name email");
    res.json(courses);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get single course
router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate("tutorId", "name email");
    res.json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
