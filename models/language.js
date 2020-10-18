const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.set('useCreateIndex', true);

//Create Schema
const Language = new Schema({
  language: { type:String, required:false, default:null }
})

module.exports = mongoose.model('Language', Language)
