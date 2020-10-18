const User = require('./../models/user')
const bcrypt = require('bcrypt')

exports.Signup = async (req, res) => {
  const { email,username,password,name,avatar,about,website,date,gender,premium,email_verify } = req.body
  var newuser = new User({
   email: email,
   username: username,
   password: password,
   name: name,
   avatar: avatar,
   about: about,
   website: website,
   date: date,
   gender: gender,
   premium: premium,
   email_verify: email_verify,
  })
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newuser.password, salt, (err, hash) => {
        newuser.password = hash
        newuser.save()
         .then(user => {
           User.findById(user._id)
            .then(docs =>  res.json(docs))
         })
         .catch(err =>  res.json(err))
    })
})
}

