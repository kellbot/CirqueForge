const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let experienceSchema = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  start: {
    type: Date
  },
  end: {
    type: Date
  },
  linkedId: {
    type: String
  }
}, {
  collection: 'experiences'
})
module.exports = mongoose.model('Experience', experienceSchema)