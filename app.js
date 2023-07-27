require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/chatDB');

const app = require('express');

const http = require('http').Server(app);

http.listen(3000, ()=>{
    console.log("server running on port 3000");
})