const express = require("express");
const handler = require("./httpHandler.js");
const fitnessController = require("./fitnessController");
const bodyParcer = require("body-parser");

const server = express();

server.use(bodyParcer.urlencoded());
server.use(bodyParcer.json());


server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

server.use("/home", express.static("./jquery-mockup"))
server.use("/old", handler.main);
server.use("/fitness", fitnessController.router);

server.listen(8081);

console.log("http://localhost:8081");