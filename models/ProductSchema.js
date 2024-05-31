const mongoose = require("mongoose");

// MongoDB Schema
const productSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  price: String,
  image: String,
});
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
