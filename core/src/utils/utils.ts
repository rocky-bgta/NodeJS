/**
 *Created By: Md. Nazmus Salahin
 *Created Date: 10/24/2017
 *Modified By:
 *Modified date:
 *(C) CopyRight Nybsys ltd.
 */
import {Sequelize} from "sequelize-typescript";
import * as _ from 'lodash';
let fs = require('fs');

export default class Utils {

    static async createDataBase(db: Sequelize, dataBaseName: string): Promise<boolean> {
        let dataBaseCreated: boolean = false;
        try {
            await db.query('CREATE DATABASE ' + dataBaseName);
            dataBaseCreated = true;
        }
        catch (err) {
            console.log(err.message);
            dataBaseCreated = false;
        }
        return dataBaseCreated;
    }

    static logger(message: string, object?: any) {
        if(!(_.isEmpty(message)) && (typeof object==='undefined')){
            console.log(message);
        }else {
            if ((object != null || (typeof object!=='undefined')) && !(_.isEmpty(message))) {
                console.warn(message + ": " +
                    JSON.stringify(object, null, 2));
            } else {
                    console.log(message + ": null");
            }
        }
        return;
    }

    static async readFile(filePath: string):Promise<any> {
        let stream;
        try {
         stream= await fs.readFile(filePath, 'utf8', function (err: any, content: any) {
                if (err) {
                    Utils.logger('file path is not correct', err);
                } else {
                    return content;
                }
            });
        } catch (err) {
            Utils.logger('file path is not correct', err);
        }
        return stream;
    }

    static getDbNameByUserID(userID: string){
        let result;
        try{
            result = userID.replace("@", "_")
                .replace(".", "_");
        }catch (err){
            Utils.logger('user id is not in correct formet', err);
        }
        return result;
    }

}