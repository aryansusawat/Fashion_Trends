const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  product_id: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  productImg: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required:true,
  },
  old_price: {
    type: Number,
    required:true,
  },
  product_qty: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required:true
  },
  sub_category: {
    type: String,
    unique: true,
    required:true,
  },
  rating: {
    type: Number,
    required: true,
  },
  colors: {
    type: [String],
    required: true,
  },
});
const ProductCollection = mongoose.model("products", ProductSchema);
module.exports = ProductCollection;