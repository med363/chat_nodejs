const mongoose = require('mongoose');
const userSchema =mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
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

moodule.exports = mongoose.Model('user',userSchema);