const mongoose = require("mongoose");
const { Schema } = mongoose;
const RestaurantSchema = new Schema({
  address: Object,
  borough: String,
  cuisine: String,
  grades: [Object],
  name: String,
  restaurant_id: String
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
module.exports = Restaurant;
