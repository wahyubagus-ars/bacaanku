const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.set('useCreateIndex', true);
let mongooseHidden = require('mongoose-hidden')({ hidden: { password:true }})


//Create Schema
const User = new Schema({
   email: { type:String, unique: true, required: false, default: null },
   username: { type:String, unique: true, required: false, default: null },
   password: { type:String, required: false, default: null},
   name: { type:String, required: false, default: null },
   avatar: { type:String, required: false, default: null },
   about: { type:String, required: false, default: null },
   website: { type:String, required: false, default: null },
   date: { type:Date, required: false, default: null },
   gender: { type:mongoose.Schema.Types.ObjectId, ref: 'Gender', required: false, default: null },
   premium: { type:Boolean, required: false, default: false },
   email_verify: { type:Boolean, required: false, default: false },
  })

User.plugin(mongooseHidden)
module.exports = mongoose.model('User', User)
