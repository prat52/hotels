const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name:{
        type : String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste :{
        type : String,
        enum : ['sweet','spicy','sour'],
        required : true
    },
    is_drink:{
        type:Boolean,
        default : false
    }
});

const MenuItems = mongoose.model('MenuItem',menuSchema);
module.exports = MenuItems;