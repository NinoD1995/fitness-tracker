const express = require("express");
const handler = require("./httpHandler.js");
const fitnessController = require("./fitnessController");

const server = express();

server.use("/client", express.static("./jquery-mockup"))
server.use("/old", handler.main);
server.use("/fitness", fitnessController.router);

server.listen(3000);

console.log("http://localhost:3000");