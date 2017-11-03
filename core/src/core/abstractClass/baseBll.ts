/**
 *Created By: Md. Nazmus Salahin
 *Created Date: 10/16/2017
 *Modified By:
 *Modified date:
 *(C) CopyRight Nybsys ltd.
 */
import Core from "./core";
import Utils from "../../utils/utils";
import Dao from "../../dataAccess/dao";

export default abstract class BaseBll extends Core {

    public dao: Dao;

    constructor() {
        super();
    }

    public async save(model: any, logMessage?: string) {
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

    public async updateByCondition(model: object, whereCondition: object, logMessage?: string) {
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

    public async deleteByCondition(whereCondition: object, logMessage?: string) {
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

    public async getAll(logMessage?: string) {
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

    public async getAllByCondition(whereCondition: object, logMessage?: string) {
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

    public async getOneByCondition(whereCondition: object, logMessage?: string) {
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

}