const mongoose = require("mongoose");
// import model Course
const Course = require("./model/course");
// connect to database
mongoose
  .connect("mongodb://localhost:27017/courses", { useNewUrlParser: true })
  .then(() => console.log("connected to server"))
  .catch(error => console.log(error));

Course.findById("001").then(course => {
  course.author = "minhnhat";
  course.name = "Mongo minh";
  course
    .save()
    .then(console.log)
    .catch(console.log);
});
