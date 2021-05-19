const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config({path: 'config.env'})
const Port = process.env.Port;

app.listen(Port, ()=>{
    console.log(`Server is up and is running on: http://localhost:${Port}`);
})

app.get('/', (req,res)=>{
res.send("Customer service application")
})

