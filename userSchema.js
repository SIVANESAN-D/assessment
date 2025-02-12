const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    "phoneNumber": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true
    },
    "password": {
        type: Date,
        default: Date.now
    },
    
    "otp": {
        type: Number,
        required: true
    },
    
    
});


const mongoose = require('mongoose')
const imageSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true
    },
    filepath: {
        type: String,
        
        required: true
    },
    
    
    
});

module.exports = mongoose.model('image', imageSchema);