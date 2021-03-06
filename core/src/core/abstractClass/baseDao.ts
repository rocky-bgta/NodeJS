/**
 *Created By: Md. Nazmus Salahin
 *Created Date: 10/10/2017
 *Modified By:
 *Modified date:
 *(C) CopyRight Nybsys ltd.
 */
import Util from "../../utils/utils";
import {sequelize} from "../../db";
import * as _ from 'lodash';
import Core from "./core";
export default abstract class BaseDao extends Core {
    constructor() {
        super();
    }

    public async executeRawQuery(query: string, type:any){
        let result,numType;
        try {

            if(type!=null)
                numType= _.toNumber(type);
            else
                throw Error;

            Util.logger("Dao executing row query");
            if(numType==0) {
                await sequelize.query(query).then((rows:any[]) => {
                    result = rows[0];
                    return;
                }).catch((err: any) => {
                    result = null;
                    return;
                });
            }else {
                await sequelize.query(query).spread((numberOfRows:any, metadata:any) => {
                    result= numberOfRows;
                    return;
                }).catch((err: any) => {
                    result = null;
                    return;
                });
            }
        } catch (err) {
            Util.logger('executing row query exception Error Log', err);
            throw err;
        }
        return result;
    }
}