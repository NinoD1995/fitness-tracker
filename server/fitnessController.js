const express = require("express");
const fitness = require("./fitnessObject");

const router = express.Router();

router
    .get("tracker/routines", (req, res) => res.send(fitness.routines))
    .post("/users", (req,res)=> {
        if(req.body.password == "password"){
            
            res.status(201).send(player);
        }else{
            res.status(403).send("Invalid Password");
        }
    })

module.exports.router = router;