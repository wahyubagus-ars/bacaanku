const { check, validationResult } = require('express-validator');
const User = require('../models/user')

exports.SignupValitaion = [

  check('email').isEmail().withMessage('must be email format')
  .notEmpty().withMessage('email is required'),
  check('username').notEmpty().withMessage('username is required')
  .isLength({ min: 3, max: 20 }).withMessage('username length 3-20 character')
  .isAlpha().withMessage('username only alphabetic'),
  // .custom(username => {
  //   if(alreadyHaveEmail(username)) return Promise.reject('username already used') 
  // }),
  check('password')
  .matches(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[0-9A-Z-a-z]{8,}$/, "i").withMessage('password must be contains number and letter')
  .notEmpty().withMessage('password is reuqired'),
  check('name').matches(/^[a-zA-Z ]+$/i).withMessage('name only alphabetic')
  .isLength({min: 3, max: 20}).withMessage('name length 3-20 alphabetic'),
  check('date').isISO8601().optional()

]

exports.validationResult = (req, res, next) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}

alreadyHaveEmail = (username) => {
  User.find({username: username})
    .then(res => {
     return true
    })
}