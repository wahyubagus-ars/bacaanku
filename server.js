require('./db');
const  express = require('express');
const bodyParser = require('body-parser')


var app = express()
app.use(bodyParser.json());
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

