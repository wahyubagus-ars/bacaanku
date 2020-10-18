require('./db');
const  express = require('express');
const bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

//Load all routes
const auth = require('./routes/auth.route')
const user = require('./routes/user.route')
const gender = require('./routes/gender.route')
const genre = require('./routes/genre.route')

//use router
app.use('/user', user);
app.use('/gender', gender);
app.use('/genre', genre);
app.use('/auth', auth);
