const mongoose = require("mongoose");
// import model Course
const Course = require("./model/course");
// connect to database
mongoose
  .connect("mongodb://localhost:27017/courses", { useNewUrlParser: true })
  .then(() => console.log("connected to server"))
  .catch(error => console.log(error));
// create a document in collection
const course1 = new Course({
  author: "minhnhat",
  tags: ["mongodb"],
  isPublished: true,
  price: 10
});

createCourse = async course => {
  try {
    const result = await course.save();
    console.log(result);
  } catch (error) {
    for(let index in error.errors) {
        console.log(error.errors[index].message);
    }
  }
};

createCourse(course1);
