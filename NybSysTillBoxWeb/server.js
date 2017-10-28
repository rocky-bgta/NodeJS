/**
 * Created by nybsys on 9/6/17.
 */
/*module.exports = app => {
    app.listen(app.get("port"), () => {
        console.log(`Starting Till Box Web API Server on - Port ${app.get("port")}`);
    });
};*/


/*module.exports = app => {
    app.db.sequelize.sync().done(() => {
        app.listen(app.get("port"), () => {
            console.log(`Starting Till Box Web API Server on - Port ${app.get("port")}`);
       });
    });
};*/

import https from "https";
import fs from "fs";

module.exports = app => {
    if (process.env.NODE_ENV !== "test") {
        const credentials = {
            key: fs.readFileSync("41194046-tillboxweb.com.key", "utf8"),
            cert: fs.readFileSync("41194046-tillboxweb.com.cert", "utf8")
        }
        app.db.sequelize.sync().done(() => {
            https.createServer(credentials, app)
                .listen(app.get("port"), () => {
                    console.log(`NTask API - Port ${app.get("port")}`);
                });
        });
    }
};