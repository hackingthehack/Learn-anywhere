const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  paid: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model("Enrollment", enrollmentSchema);
