const mongoose = require("mongoose");
// import model Course
const Course = require("./model/course");
// connect to database
mongoose
  .connect("mongodb://localhost:27017/course", { useNewUrlParser: true })
  .then(() => console.log("connected to server"))
  .catch(error => console.log(error));
// create a document in collection
const course1 = new Course({
  name: "MongoDb",
  author: "minhnhat",
  tags: ["mongodb", "mongoose"],
  isPublished: true,
  price: 10
});
course1.save().then(course => console.log(course));
