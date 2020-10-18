const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.set('useCreateIndex', true);

//Create Schema
const Status = new Schema({
  status: { type:String, required:false, default:null }
})

module.exports = mongoose.model('Status', Status)
