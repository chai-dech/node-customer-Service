const userDb = require('../model/model');

//create user
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new user
    const user = new userDb({
        name : req.body.name,
        email : req.body.email,
        address: req.body.address,
        contact : req.body.contact
    })

    // save user in the database
    user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "error seen"
            });
        });

}


//find user
exports.find= (req, res) =>{

}
//update user
exports.update= (req, res) =>{

}

//delete user
exports.delete= (req, res) =>{

}