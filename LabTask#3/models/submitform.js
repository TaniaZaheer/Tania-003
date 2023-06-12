const mongoose = require('mongoose');

// Define a schema for your data
const submitSchema = new mongoose.Schema({
    username: String,
  password: String
});

// Create a model bamongosed on the schema
const submit = mongoose.model('submit', submitSchema);

module.exports = submit;