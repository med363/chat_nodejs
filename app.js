require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/chatDB');

const express = require('express');
const app = express();


const http = require('http').Server(app);

const userRoute = require('./routes/userRoute');

app.use('/',userRoute);

http.listen(4000, ()=>{
    console.log("server running on port 4000");
})