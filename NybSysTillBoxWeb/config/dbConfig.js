/**
 * Created by nybsys on 9/6/17.
 */
import logger from "./logger";
module.exports = {
    database: "tillboxweb",
    username: "postgres",
    password: "123456",

    params: {
        dialect: "postgres",
        logging: (sql) => {
             logger.info(`[${new Date()}] ${sql}`);
        },
        define:{
            underscored: true
        }
    }
}