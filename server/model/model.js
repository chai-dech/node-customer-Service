const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    }
})

const userDb = mongoose.model('userDb', schema);
module.exports = userDb;