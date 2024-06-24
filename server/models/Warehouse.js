const mongoose = require("mongoose");
const Zone = require("./Zone");

const instance = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  zones: [Zone.schema],
});

const modelName = "Warehouse";

module.exports = mongoose.model(modelName, instance);
