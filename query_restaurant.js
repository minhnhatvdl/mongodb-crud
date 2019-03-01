const mongoose = require("mongoose");
// import model Restaurant
const Restaurant = require("./model/restaurant");
// connect to database
mongoose
  .connect("mongodb://localhost:27017/restaurants", { useNewUrlParser: true })
  .then(() => console.log("connected to server"))
  .catch(error => console.log(error));

// Restaurant.find().then(console.log);

// Restaurant.find({}, { restaurant_id: 1, name: 1, borough: 1, _id: 0 })
//   .then(console.log);

// Restaurant.find({}, { restaurant_id: 1, name: 1, "address.zipcode": 1, _id: 0 })
//   .then(console.log);

// Restaurant.find(
//   { grades: { $elemMatch: { score: { $gt: 90 } } } },
//   { name: 1, _id: 0 }
// ).then(console.log);

// Restaurant.find(
//   {
//     cuisine: { $ne: "American" },
//     grades: { $elemMatch: { grade: { $eq: "A" } } },
//     borough: { $ne: "Brooklyn" }
//   },
//   { name: 1, _id: 0, cuisine: 1, borough: 1 }
// )
//   .sort({ cuisine: 1 })
//   .then(console.log);

// Restaurant.find(
//   {
//     $and: [
//       { cuisine: /^((?!american).)*$/i },
//       { grades: { $elemMatch: { grade: { $eq: "A" } } } },
//       { borough: { $ne: "Brooklyn" } }
//     ]
//   },
//   { name: 1, _id: 0, cuisine: 1, borough: 1 }
// ).sort({ cuisine: 1 }).then(console.log);

Restaurant.find(
  {
    $or: [{ cuisine: "American " }, { cuisine: "Chinese" }]
  },
  { cuisine: 1, name: 1, borough: 1, _id: 0 }
).then(console.log);
