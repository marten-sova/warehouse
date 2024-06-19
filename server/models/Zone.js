const mongoose = require('mongoose')
const Shelf = require('./Shelf')

const instance = new mongoose.Schema(
  {
    /*
      document ID is set by default via MongoDB - next line is deprecated
      _id: mongoose.Schema.Types.ObjectId,
    */

    zoneNumber: {
      type: Number,
      required: true,
    },
    shelves: [Shelf.schema],
  },
)

// NOTE! use a singular model name, mongoose automatically creates a collection like so:
// model: 'Account' === collection: 'accounts'
const modelName = 'Zone'

module.exports = mongoose.model(modelName, instance)
