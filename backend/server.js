const express = require('express');
const mongoose = require('mongoose');
const { chats } = require('./data/data');

const app = express()

app.get('/',(req,res)=>{
    res.send("API running");
});

app.get('/api/chat',(req,res)=>{
    res.send(chats);
});

app.get('/api/chat/:id',(req,res)=>{
    // console.log(req.params.id);
    const singleChat=chats.find((c)=>c._id ===req.params.id)
    res.send(singleChat);
});

app.listen(5000,console.log("Server started on PORT 5000"));

