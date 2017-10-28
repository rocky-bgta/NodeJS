//import * as express from 'express';
//import * as MorganLogger from 'morgan';
//import * as fs from 'fs';
//import * as path from 'path'
import Utils from "../utils/utils";


export default class Logger {

    constructor(){
        //winston.info('Version: ' + process.version);
        //winston.info('PID: ' + process.pid);
        //Utils.logger('Memory use', process.memoryUsage());
        //Utils.logger('Arch', process.arch);
    }

}

/*export default (app: express.Application) => {
    winston

    let accessLogStream = fs.createWriteStream(
        path.join(__dirname, '/../../access.log'), {flags: 'a'}
    );
    // setup the MorganLogger
    app.use(MorganLogger('combined', {stream: accessLogStream}));
}*/


console.warn('Version: ' + process.version);
console.warn('PID: ' + process.pid);
Utils.logger('Memory use', process.memoryUsage());
Utils.logger('Arch', process.arch);
