/**
 *Created By: Md. Nazmus Salahin
 *Created Date: 10/26/2017
 *Modified By:
 *Modified date:
 *(C) CopyRight Nybsys ltd.
 */
import Dao from "../../dataAccess/dao";
import Utils from "../../utils/utils";
import {globalModule} from "../global/module";
import {ICustomType} from "../ICustomType";

export abstract class abstractBll {
    //abstract makeSound(): void;

    public dao: Dao;
    public customObject: ICustomType;
    constructor() {
        this.customObject = {};
    }

    public async save(model: any, logMessage?:string) {
        let result;
        try {
            Utils.logger(logMessage);
            result = await this.dao.save(model);
        } catch (err) {
            Utils.logger('Error Log', err);
            throw err;
        }
        return result;
    }

    public async updateByCondition(model: object, whereCondition: object, logMessage?:string) {
        let result;
        Utils.logger(logMessage);
        try {
            result = await this.dao.updateByCondition(model, whereCondition);
        } catch (err) {
            Utils.logger('Error Log', err);
            throw err;
        }
        return result;
    }

    public async deleteByCondition(whereCondition: object, logMessage?:string) {
        let result;
        Utils.logger(logMessage);
        try {
            result = await this.dao.deleteByCondition(whereCondition);
        } catch (err) {
            Utils.logger('Error Log', err);
            throw err;
        }
        return result;
    }

    public async getAll(logMessage?:string){
        let result;
        try {
            Utils.logger(logMessage);
            result = await this.dao.getAll();
        } catch (err) {
            Utils.logger('Error Log', err);
            throw err;
        }
        return result;
    }

    public async getAllByCondition(whereCondition: object, logMessage?:string) {
        let result;
        Utils.logger(logMessage);
        try {
            result = await this.dao.getAllByCondition(whereCondition);
        } catch (err) {
            Utils.logger('Error Log', err);
            throw err;
        }
        return result;
    }

    public async getOneByCondition(whereCondition: object, logMessage?:string) {
        let result;
        Utils.logger(logMessage);
        try {
            result = await this.dao.getOneByCondition(whereCondition);
        } catch (err) {
            Utils.logger('Error Log', err);
            throw err;
        }
        return result;
    }

    public getRawQueryBuilder(){
        let result = globalModule.queryBuilder;
        return result;
    }

    public getStringBuilder(){
        let result;
        result = new globalModule.stringBuilder();
        return result;
    }
}