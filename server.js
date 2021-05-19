const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const app = express();

dotenv.config({path: 'config.env'})
const Port = process.env.Port;

app.listen(Port, ()=>{
    console.log(`Server is up and is running on: http://localhost:${Port}`);
})

//logs the requests
app.use(morgan('tiny'));
//use the bodyparser 
app.use(express.urlencoded({ extended: true }));
//set view engine
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
res.send("Customer service application")
})

