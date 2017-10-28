import express from "express";
import consign from "consign";


const app = express();


consign()
    .include("config/dbConfig.js")
    .include("config/security.js")
    .then("db.js")
    .then("auth.js")
    .then("middleware/middlewares.js")
    //.then("middleware/logger.js")

    .then("bll")
    .then("routes")
    .then("middleware/errorHandler.js")

    .then("server.js")
    .into(app);

// For debug use
// ~/Desktop/GitRepo/NodeJS/NybSysTillBoxWeb/node_modules/babel-cli/bin/babel-node.js
// as a interpreater for supporting es6/es7 code to es5.