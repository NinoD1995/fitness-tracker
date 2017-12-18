const express = require("express");
const fitness = require("./fitnessObject");

const router = express.Router();

router
    .get("tracker/routines", (req, res) => res.send(fitness.routines))

module.exports.router = router;