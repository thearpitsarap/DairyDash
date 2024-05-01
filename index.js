const express = require('express');

const app = new express();

app.get('/',(req,res)=>{
    res.send("Hello");
})

app.listen("3000",()=>{
    console.log("Server Started at 3000");
})