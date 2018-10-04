// Requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

// Port 
const port = process.env.PORT || 4501;

// Require Routers

// Middleware
app.use(express.static('./client/build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Use Routers

// Listener
app.listen(port, function() {
    console.log('Listening on port ', port);
});

exports = module.exports = app;