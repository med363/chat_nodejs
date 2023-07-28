const mongoose = require('mongoose');
const chatSchema =mongoose.Schema({
sender_id:{
    type:mongoose.Types.ObjectId,
    ref:'User'
},
receiver_id:{
    type:mongoose.Types.ObjectId,
    ref:'User'
},
message:{
    type:String,
    require:true
}
},
{timestamp:true}
);

module.exports = mongoose.model('chat',chatSchema);