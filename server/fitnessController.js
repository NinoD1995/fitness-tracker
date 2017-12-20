const express = require("express");
const fitness = require("./fitnessObject");

const router = express.Router();

router
    .get("/routines", (req, res) => res.send(fitness.routines))

module.exports.router = router;