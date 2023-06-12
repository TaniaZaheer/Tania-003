const mongoose = require('mongoose');

// Define a schema for your data
const necklaceSchema = new mongoose.Schema({
  pic: String,
  title: String,
  paragraph: String,
  price: String,
});

// Create a model bamongosed on the schema
const necklace = mongoose.model('necklace', necklaceSchema);

module.exports = necklace;