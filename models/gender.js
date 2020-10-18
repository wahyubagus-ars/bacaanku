const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.set('useCreateIndex', true);

//Create Schema
const Gender = new Schema({
  gender: { type:String }
})

module.exports = mongoose.model('Gender', Gender)
