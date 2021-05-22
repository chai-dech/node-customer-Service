const express = require('express');
const route = express.Router();
const controller = require('./server/controller/api');

route.get('/', (req,res)=>{
    res.render('index.ejs');
})

route.get('/add_user', (req,res)=>{
    res.render('add_user.ejs');
})

route.get('/update_user', (req,res)=>{
    res.render('update_user.ejs');
})


//apis
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route;