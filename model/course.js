const mongoose = require("mongoose");
const { Schema } = mongoose;
const CourseSchema = new Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: Number
});

const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;
