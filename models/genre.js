const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.set('useCreateIndex', true);

//Create Schema
const Genre = new Schema({
  genre: { type:String, required: false, default: null }
})

module.exports = mongoose.model('Genre', Genre)
