const mongoose = require("mongoose");
const { Schema } = mongoose;
const CourseSchema = new Schema({
  name: { type: String, required: true },
  author: String,
  tags: {
    type: [String],
    validate: {
      validator: tags => tags && (tags.length > 1),
      message: "A course must have at least two tags"
    }
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: {
    type: Number,
    required: function() {
      return this.isPublished;
    }
  }
});

const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;
