const express = require("express");

const RecipeRouter = require("./RecipeRouter");

const server = express();

server.use(express.json());
server.use("/api/recipes", RecipeRouter);

module.exports = server;
