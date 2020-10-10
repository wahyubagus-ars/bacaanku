const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bacaanku',{ useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (!err) {
        console.log("mongodb connection success")
    } else {
        console.log('mongodb connection: failed')
    }
})