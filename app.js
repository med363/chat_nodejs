require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/chatDB');

const express = require('express');
const app = express();


const http = require('http').Server(app);

const userRoute = require('./routes/userRoute');
const User = require('./models/userModel');
app.use('/',userRoute);

const io = require('socket.io')(http);

var usp =io.of('/user-namespace');

usp.on('connection',async (socket)=>{
    console.log('User Connected');
    var userId=socket.handshake.auth.token;

   await User.findByIdAndUpdate({ _id: userId}, { $set:{ is_online:'1'}});
           // user broadcast online status
           socket.broadcast.emit('getOnlineUser', { user_id: userId});

    socket.on('disconnect',async ()=>{
        console.log('user Disconnectd');

        var userId=socket.handshake.auth.token;

        await User.findByIdAndUpdate({ _id: userId}, { $set:{ is_online:'0'}});

                // user broadcast offline status
                socket.broadcast.emit('getOfflineUser', { user_id: userId});



        
    })
});


http.listen(4000, ()=>{
    console.log("server running on port 4000");
})