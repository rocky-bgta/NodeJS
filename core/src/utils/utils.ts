/**
 *Created By: Md. Nazmus Salahin
 *Created Date: 10/24/2017
 *Modified By:
 *Modified date:
 *(C) CopyRight Nybsys ltd.
 */
import {Sequelize} from "sequelize-typescript";
import * as _ from 'lodash';
//import {ICustomType} from "../core/interface/ICustomType";

let fs = require('fs');
let uniqid = require('uniqid');

export default class Utils {

    static async createDataBase(db: Sequelize, dataBaseName: string):Promise<boolean> {
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

    static generateUniqueID() {
        let uniqueID : string;
        uniqueID = uniqid();
        return uniqueID;

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

    static getDbNameByBusinessName(businessName: string){
        let result:string;
        try{
            result = businessName+'_' + new Date().getTime();
        }catch (err){
            Utils.logger('user id is not in correct formet', err);
        }
        return result;
    }

   /* static castObject(targetObject: any, givenObject:any){
        let buildObject: ICustomType = {};
        let targetObjectPros = Object.keys(targetObject);
        let givenObjectPros = Object.keys(givenObject);
        for(let targetProperty of targetObjectPros){
            for(let givenProperty of givenObjectPros){
                if(targetProperty==givenProperty){
                    buildObject[targetProperty] = givenObject[targetProperty];
                    break;
                }
            }
        }
        return buildObject;
    }*/

    static uniqueIndexOnColunmn(tableName: string, columnName:string, indexName: string){
        'CREATE UNIQUE INDEX'+  indexName +'ON' + '"'+ tableName+'"' + '((lower('+ columnName +')));';
        //return buildObject;
    }

}