const express = require('express');
const route = express.Router();
const controller = require('../controller/api');
const axios = require('axios');

route.get('/', (req, res) => {
    axios.get("http://localhost:8089/api/users")
        .then((response) => {
            console.log(response)
            res.render('index.ejs', { users: response.data });
        }).catch(error => {
            res.send(error)
        })

})

route.get('/add_user', (req, res) => {
    res.render('add_user.ejs');
})

route.get('/update_user', (req, res) => {
    axios.get('http://localhost:8089/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            console.log("userdata", userdata);
            res.render("update_user.ejs", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
})

//apis
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route;