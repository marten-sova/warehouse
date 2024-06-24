const mongoose = require("mongoose");

const instance = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const modelName = "Shelf";

module.exports = mongoose.model(modelName, instance);
