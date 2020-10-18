const express = require('express');
var router = express.Router()
const { SigninValitaion, SigninValidationResult } = require('../validations/auth.validation')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const config = require('config')

router.post('/sign-in', SigninValitaion, SigninValidationResult, (req, res) => {
  const {email, password} = req.body
    User.findOne({ email})
    .then(user => { 
      if(!user) res.json({ msg: 'user not exists' });
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if(!isMatch)  res.json({ msg: 'password incorrect' })
          jwt.sign(
            {id: user._id},
            config.get('jwtSecret'),
            { expiresIn: 3600 },
            (err, token) => {
                if(err) throw err
                 res.status(200).json({
                     success: true,
                     token,
                     user_id: user._id
                 });
            }
          )
        })
    })
});
// router.get('/sign-out', auth, AuthController.Signout);

module.exports = router