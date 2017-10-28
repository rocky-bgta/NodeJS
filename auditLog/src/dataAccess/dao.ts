import Util from '../utils/utils';
import BaseDao from "../core/abstractClass/baseDao";
import {sequelize} from "../db";

export default class Dao extends BaseDao {
    private entity: any;

    constructor(entity: any) {
        super();
        this.entity = entity;
    }

    public async save(object: any) {
        let saveEntity: any=null;
        try {
            await sequelize.transaction(async (t) => {
                await this.entity.create(object, {transaction: t}).then((row: any) => {
                    Util.logger('save Dao Success', row);
                    saveEntity = row;
                    return;
                }).catch((err: any) => {
                    t.rollback();
                    Util.logger('save Dao Failed', err);
                });
            });
        } catch (err) {
            Util.logger('save Dao Error Log', err);
            throw err;
        } finally {
            //sequelize.close();
        }
        return saveEntity;
    }

    public async getAll(orderBy: string = null, columnName: string = null, direction: string = 'ASC') {
        Util.logger("Dao getAll function get executed");
        let returnRows: any = new Array<any>();
        try {

            if (orderBy != null && columnName != null) {
                await this.entity.findAll({
                    order: [
                        [[columnName], [direction]]
                    ]
                }).then((rows: any) => {
                    returnRows = rows
                    /*entity.forEach(function (row: any) {
                        returnRows.push(row.dataValues);
                    });*/
                }).catch((err: any) => {
                    returnRows = null;
                });

            } else {
                await this.entity.findAll().then((rows: any) => {
                    returnRows = rows;

                }).catch((err: any) => {
                    returnRows = null;
                });
            }
        } catch (err) {
            Util.logger('getAll Dao Error Log', err);
            throw err;
        } finally {

        }
        return returnRows;
    }

    public async getAllByCondition(whereClause: object) {
        let result: any = new Array<any>();
        try {
            await this.entity.findAll({
                where: whereClause
            }).then((rows: any) => {
                result = rows;
                return;
            }).catch((err: any) => {
                result= err;
                return;
            });
        } catch (err) {
            console.log("Dao findAllByOneCondition Error:  " + err.message);
            throw err;
        } finally {

        }

        return result;
    }

    public async getOneByCondition(whereCondition: object) {
        let result:any=null;
        try {
            await this.entity.findOne({
                where: whereCondition
            }).then((rows: any) => {
                result = rows;
                return;
            }).catch((err: any) => {
                result = err;
                return;
            });
        } catch (err) {
            console.log("Dao getOneByCondition Error:  " + err.message);
            throw err;
        } finally {

        }
        return result;
    }

    public async updateByCondition(model: object, whereCondition: object) {
        let result: any=null;
        try {
            result = await this.entity.update(
                model,
                {
                    where: whereCondition
                }
            ).then((success: any) => {
                Util.logger("Update success", success);
                result = success;
            }).catch((err: any): any => {
                Util.logger("Update Failed", err);
                result = err;
                return;
            });
        } catch (err) {
            console.log("Dao updateByCondition Error:  " + err.message);
            throw err;
        } finally {

        }
        return result;
    }

    public async deleteByCondition(whereObject: Object) {
        let result:any=null;
        try {
            await this.entity.destroy({
                where: whereObject
            }).then((deleteCount: any) => {
                result = deleteCount;
            }).catch((err:any)=>{
                result = err;
                return;
            });
        } catch (err) {
            Util.logger("Dao delete by condition ", err);
            throw err;
        }
        return result;
    }
}