const express = require("express");
const fitness = require("./fitnessObject");

const router = express.Router();

router
    .get("/routines", (req, res) => res.send(fitness.routines))
    .get("/myRoutines", (req, res) => res.send(fitness.myRoutines))
    .get("/users", (req, res) => res.send(fitness.users))
    .post("/myRoutines",(req, res) => {
        fitness.myRoutines.push(req.body);
    })
    .post("/users",(req, res) => {
        if(req.body.password == "password"){
            let user = fitness.users.find(x=> x.fbid == req.body.fbid);
            if(!user){
                user = { name: req.body.name, id: fitness.users.length, fbid: req.body.fbid, picture: req.body.picture };
                fitness.users.push(user);
            }
            res.status(201).send(user);
        }else{
            res.status(403).send("Invalid Password");            
        }
    })

module.exports.router = router;