const express = require('express');
var router = express.Router()
const auth = require('./../middleware/auth')
const BaseApi = require('../library/BaseApi/baseApi')
const Model = './../../models/genre'

//GET route genre
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

//POST (add) data genre
//response status 200||400
router.post('/', auth, async (req, res) => {
  const data = {
    genre: req.body.genre
  }
  await BaseApi.postApi(Model, data)
  .then(result =>  res.status(201).json({
    success: true,
    msg: 'data success added!',
    data: result
  })).catch(err =>  res.status(400).json({
     msg: 'bad request',
     error: err
    }))
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
router.patch('/', auth, async (req, res) => {
  const data = {
    genre: req.body.genre
  }
  await BaseApi.patchApi(Model, req.query.id, data)
  .then(result =>  res.status(201).json({
     success: true,
     data: result 
    }))
  .catch(e => res.status(400).json(e))
});

//DELETE data by id
router.delete('/', auth, async (req, res) => {
  await BaseApi.deleteApi(Model, req.query.id)
  .then(result =>  res.status(201).json({
     success: true,
    }))
  .catch(e => res.status(400).json(e))
});

module.exports = router