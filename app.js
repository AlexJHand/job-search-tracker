// Requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
require('dotenv').config();

// Port 
const port = process.env.PORT || 4501;

// MongoDB Connection
mongoose.connect('mongodb://localhost/jobtracker');

// Require Routers
const indexRouter = require('./routes/index.router');
const userRouter = require('./routes/user.router');

// Middleware
app.use(express.static('./client/build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Sessions
app.use(
    session({
        secret: 'this is the default passphrase',
        resave: false,
        saveUninitialized: false
    })
)

// Use Routers
app.use('/user', userRouter);
app.use('/', indexRouter);

// Listener
app.listen(port, function() {
    console.log('Listening on port ', port);
});

exports = module.exports = app;