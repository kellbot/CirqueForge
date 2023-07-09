const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let personSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: Number
  },
}, {
  collection: 'people'
})
module.exports = mongoose.model('Person', personSchema)