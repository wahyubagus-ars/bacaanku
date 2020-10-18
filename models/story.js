const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create Schema
const Story = new Schema({
   title: { type:String, unique: true, required: false, default: null },
   docs: { type:String, required: false, default: null },
   main_characters: { type:Array, required: false, default: null},
   genre: { type: mongoose.Schema.Types.ObjectId, ref:'Genre', required: false, default: null },
   target_audience: { type:mongoose.Schema.Types.ObjectId, ref:'TargetAudience', required: false, default: null },
   leangue: { type:mongoose.Schema.Types.ObjectId, ref:'language', required: false, default: null },
   viewed: { type: Number, required: false, default: null },
   share: { type: Number, required: false, default: null },
   status: { type:mongoose.Schema.Types.ObjectId, ref:'status', required: false, default: null },
   writter: { type:mongoose.Schema.Types.ObjectId, ref:'user', required: false, default: null },
   rate: { type:Boolean, required: false, default: false },
   rated: { type:Number, required: false, default: null },
  })

module.exports = mongoose.model('Story', Story)
