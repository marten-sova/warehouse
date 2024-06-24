const mongoose = require("mongoose");
const Shelf = require("./Shelf");

const instance = new mongoose.Schema({
  zoneNumber: {
    type: Number,
    required: true,
  },
  shelves: [Shelf.schema],
});

const modelName = "Zone";

module.exports = mongoose.model(modelName, instance);
