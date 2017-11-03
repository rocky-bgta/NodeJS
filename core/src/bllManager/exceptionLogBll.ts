/**
 *Created By: Md. Nazmus Salahin
 *Created Date: 10/18/2017
 *Modified By:
 *Modified date:
 *(C) CopyRight Nybsys ltd.
 */
import Util from "../utils/utils";
import Dao from "../dataAccess/dao";
import ExceptionLogModel from "../models/exceptionLogModel";
import * as Entities from "../entities/index";
import BaseBll from "../core/abstractClass/baseBll";

export default class ExceptionLogBll extends BaseBll {


    dao: Dao;

    constructor() {
        super();
        this.dao = new Dao(Entities.exceptionLog);
    }

    async saveExceptionLog(exceptionLogModel: ExceptionLogModel) {
        let result;
        try {
            Util.logger('save ExceptionLog method from userBll');
            result = await this.dao.save(exceptionLogModel);
        } catch (err) {
            Util.logger('Error Log', err);
            throw err;
        }
        return result;
    }

    public async getAllExceptionLog() {
        let result;
        try {
            Util.logger('getAllExceptionLog method from userBll');
            result = await this.dao.getAll();
        } catch (err) {
            Util.logger('Error Log', err);
            throw err;
        }
        return result;
    }

    public async updateExceptionLog(model: object, whereCondition: object): Promise<any> {
        Util.logger('update ExceptionLog method from userBll');
        let result;
        try {
            result = await this.dao.updateByCondition(model, whereCondition);
        } catch (err) {
            Util.logger('Error Log', err);
            throw err;
        }
        return result;
    }


    public async findOne(id: number) {
        let result;
        Util.logger('Find one row method from userBll');
        let whereCondition = this.customObject;
        try {
            whereCondition.exceptionLogID = id;
            //this.exceptionLogModel = await this.dao.findOneByCondition('exceptionLogID', id)
            result = await this.dao.getOneByCondition(whereCondition);
        } catch (err) {
            Util.logger('Error Log', err);
            throw err;
        }
        return result;
    }

    public async getFiltered(whereClause: object) {
        let result;
        Util.logger('Find row method from userBll');
        try {
            result = await this.dao.getAllByCondition(whereClause);
        } catch (err) {
            Util.logger('Error Log', err);
            throw err;
        }
        return result;
    }

}