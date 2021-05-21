const express = require('express');
const route = express.Router();

route.get('/', (req,res)=>{
    res.render('index.ejs');
})

route.get('/add_user', (req,res)=>{
    res.render('add_user.ejs');
})

route.get('/update_user', (req,res)=>{
    res.render('update_user.ejs');
})

module.exports = route;