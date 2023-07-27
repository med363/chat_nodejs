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
    type:string,
    require:true
}



},
{timestamp:true}
);

moodule.exports = mongoose.Model('chat',chatSchema);