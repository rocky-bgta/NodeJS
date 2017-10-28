/**
 * Created by nybsys on 9/6/17.
 */

import bodyParser from "body-parser";
//import logger from "morgan";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import logger from "../config/logger";
import compression from "compression";
import helmet from "helmet";

module.exports = app => {
    app.set('port', process.env.PORT || 3000);
    app.disable('x-powered-by');
    app.set("json spaces", 4);

    app.use(morgan("common", {
         stream: {
         write: (message) => {
             logger.info(message);
             }
         }
     }));

    app.use(helmet());

    app.use(cors({
         origin: ["http://localhost:3001"],
         methods: ["GET", "POST", "PUT", "DELETE"],
         allowedHeaders: ["Content-Type", "Authorization"]
    }));
  //  app.use(logger('dev'));

    app.use(bodyParser.json());
    app.use(compression());
    app.use(app.auth.initialize());
    app.use((req, res, next) => {
        delete req.body.id;
        next();
    });
    app.use(express.static("public"));
};