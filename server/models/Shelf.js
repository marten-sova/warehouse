const mongoose = require('mongoose')

const instance = new mongoose.Schema(
  {
    /*
      document ID is set by default via MongoDB - next line is deprecated
      _id: mongoose.Schema.Types.ObjectId,
    */

    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
)

// NOTE! use a singular model name, mongoose automatically creates a collection like so:
// model: 'Account' === collection: 'accounts'
const modelName = 'Shelf'

module.exports = mongoose.model(modelName, instance)
