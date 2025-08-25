const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  tutorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  videos: [String],
  documents: [String],
}, { timestamps: true });

module.exports = mongoose.model("Course", courseSchema);
