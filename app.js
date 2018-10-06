// Requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

// Port 
const port = process.env.PORT || 4501;

// MongoDB Connection
mongoose.connect('mongodb://localhost/jobtracker');

// Require Routers
const indexRouter = require('./routes/index.router');

// Middleware
app.use(express.static('./client/build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Use Routers
app.use('/', indexRouter);

// Listener
app.listen(port, function() {
    console.log('Listening on port ', port);
});

exports = module.exports = app;