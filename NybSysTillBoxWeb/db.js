/**
 * Created by nybsys on 9/6/17.
 */

import fs from "fs";
import path from "path";
import Sequelize from "sequelize";

let db = null;

module.exports = app => {
    if (!db) {
        const config = app.config.dbConfig;
        const sequelize = new Sequelize(
            config.database,
            config.username,
            config.password,
            config.params
        );

        //Test connection
        sequelize
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });

        db = {
            sequelize,
            Sequelize,
            entities: {}
        };
        const dir = path.join(__dirname, "entities");
        fs.readdirSync(dir).forEach(file => {
            const modelDir = path.join(dir, file);
            const model = sequelize.import(modelDir);
            db.entities[model.name] = model;
        });

        for(let key in db.entities){
            console.log("Key "+key);
            db.entities[key].associate(db.entities);
        }
       /* Object.keys(db.entities).forEach(key => {
            db.entities[key].associate(db.entities);
        });*/
    }
    return db;
};


/*


 //Test connection
 sequelize
 .authenticate()
 .then(() => {
 console.log('Connection has been established successfully.');
 })
 .catch(err => {
 console.error('Unable to connect to the database:', err);
 });*/
