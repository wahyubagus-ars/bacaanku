const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.set('useCreateIndex', true);

//Create Schema
const TargetAudience = new Schema({
  target_audience: { type:String, required:false, default:null }
})

module.exports = mongoose.model('TargetAudience', TargetAudience)
