// Requires
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Application Schema
const applicationSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    companySite: {
        type: String,
        required: false
    },
    position: {
        type: String, 
        required: true
    },
    dateApplied: {
        type: Date,
        required: true
    }
});

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;