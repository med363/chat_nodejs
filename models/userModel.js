const mongoose = require('mongoose');
const userSchema =mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:false
    },
    password:{
        type:String,
        required:true
    },
    is_online:{
        type:String,
        default:'0'
    },



},
{timestamp:true}
);

module.exports = mongoose.model('user',userSchema);