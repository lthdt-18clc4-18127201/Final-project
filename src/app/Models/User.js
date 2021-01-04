const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name:{
        type:String,
        minlength: 1,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
        minlength: 1,
    },
    role:{
        type:String,
        default:"reader",
    }
});

module.exports = mongoose.model('User', User);