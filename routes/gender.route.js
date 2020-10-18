const express = require('express');
var router = express.Router()
const auth = require('../middleware/auth')
const Gender = require('../models/gender')
const BaseApi = require('../library/BaseApi/baseApi')
const Model = './../../models/gender'

//GET route gender
//response status 200||400
router.get('/', auth, async (req, res) => {
  await BaseApi.getApi(Model)
  .then(result => res.status(200).json({
      success: true,
      data: result
    })).catch(err => res.json(400).json({
      success: false,
      msg: 'get data failed',
      err: err
    }))
});

//POST (add) data gender
//response status 200||400
router.post('/', auth, async (req, res) => {
  const data = {
    gender: req.body.gender
  }
  await BaseApi.postApi(Model, data)
  .then(result =>  res.status(201).json({
    success: true,
    msg: 'data success added!',
    data: result
  })).catch(err =>  res.status(400).json({ msg: 'bad request' }))
});

//PUT data by id
router.put('/:id', auth, async (req, res) => {
  await BaseApi.putApi(Model, req.params.id)
   .then(result => res.status(201).json({
        success: true,
        data: result
  })).catch(err => res.status(400).json({ 
    err: err,
    msg: 'put data failed'
   }))
});

//PATCH/Update data by id
router.patch('/:id', auth, async (req, res) => {
  const data = {
    gender: req.body.gender
  }
  await BaseApi.patchApi(Model, req.params.id, data)
  .then(result =>  res.status(201).json({
     success: true,
     data: result 
    }))
  .catch(e => e)
});

//DELETE data by id
router.delete('/:id', auth, async (req, res) => {
  await BaseApi.deleteApi(Model, req.query.id)
  .then(result =>  res.status(201).json({
     success: true,
    }))
  .catch(e => res.status(400).json(e))
  // Gender.findByIdAndDelete({_id: req.query.id})
  // .then(res => res.send({ success: true }))
  // .catch(e => res.send(e))
});

module.exports = router