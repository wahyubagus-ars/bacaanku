const express = require('express');
const { SigninValitaion } = require('../validations/auth.validation');
var router = express.Router()
const {Signup} = require('../controllers/userController')
const { SignupValitaion, validationResult } = require('../validations/user.validation')

router.post('/reg', SignupValitaion, validationResult, Signup);

router.get('/', (req, res) => {
  User.find({ email: 'brucewayne@gmail.com' })
  .populate('gender')
  .exec()
  .then(docs => res.send(docs))
});

module.exports = router