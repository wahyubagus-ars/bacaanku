const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.set('useCreateIndex', true);

//Create Schema
const Character = new Schema({
  name: { type:String, default:null, required:false },
  age: { type:Number, default:null, required:false },
  gender: { type:mongoose.Schema.Types.ObjectId, ref: 'Gender', required: false, default: null  },
})

module.exports = mongoose.model('Character', Character)
