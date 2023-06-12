const mongoose = require('mongoose');

// Define a schema for your data
const JewellerySchema = new mongoose.Schema({
  Email: String,
  First_Name: String,
  Last_Name: String,
  price: Number
});

// Create a model based on the schema
const Jewellery = mongoose.model('jewellery', JewellerySchema);

module.exports = Jewellery;
