const express = require('express');
const app = express();
const port =5555;

const dbConnet = require('./database/database').connect('mongodb://localhost:27017');

app.get('/',(req,res)=>{
    console.log('request received',req.ip);
res.send('Hello World');
});

app.listen(port,()=>{
    console.log(`server listening on port ${port}`);
});