const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const app = express();
const connectDb = require('./server/database/connection');
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
//connect to db
connectDb();

//load assests
app.use('/css', express.static(path.resolve(__dirname, "assests/css")));
app.use('/img', express.static(path.resolve(__dirname, "assests/img")));
app.use('/js', express.static(path.resolve(__dirname, "assests/js")));

app.use('/', require('./server/routes/router.js'));