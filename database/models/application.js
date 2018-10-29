// Requires
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Application Schema
const applicationSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    position: {
        type: String, 
        required: true
    }
})