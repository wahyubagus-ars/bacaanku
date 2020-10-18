module.exports = {
  //Get data api
  getApi: async (model) => {
    return new Promise((resolve, reject) => {
      const Model = require(model)
      try {
        Model.find()
        .then(result => resolve(result))
        .catch(error => reject(error))
      } catch (e) {
        reject(e)
      }
    })
  },

  //Post data api
  postApi: async (model, data) => {
    return new Promise((resolve, reject) => {
      const Model = require(model)
      try{
        const res = new Model(data)
        res.save()
        .then(result => resolve(result))
        .catch(error => reject(error))
      } catch (e){
        reject(e)
      }
    })
  },

  //Put data api
  //Get data by Id
  putApi: async (model, id) => {
    return new Promise((resolve, reject) => {
      const Model = require(model)
      try{
        Model.findById({ _id:id })
        .then(result => resolve(result))
        .catch(error => reject(error))
      } catch (e){
        reject(e)
      }
    })
  },

  //Patch/Update data api
  patchApi: async (model, id, data) => {
    return new Promise((resolve, reject) => {
      const Model = require(model)
      try{
        Model.findOneAndUpdate({ _id:id }, data)
        .then(result => {
          const sendResult = {
            data: data,
            _id: result._id
          }
          resolve(sendResult)
        })
        .catch(error => reject(error))
      } catch (e){
        reject(e)
      }
    })
  },

  // Delete data api by Id
  deleteApi: (model, id) => {
    return new Promise((resolve, reject) => {
      const Model = require(model)
      try{
        Model.findByIdAndDelete({_id:id})
        .then(res => resolve(res))
        .catch(e => reject(e))
      } catch (e){
        reject(e)
      }
    })
  }
}