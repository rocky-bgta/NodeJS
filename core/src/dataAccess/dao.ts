import Util, {default as Utils} from '../utils/utils';
import BaseDao from "../core/abstractClass/baseDao";
import {sequelize} from "../db";

export default class Dao extends BaseDao {
    private entity: any;

    constructor(entity: any) {
        super();
        this.entity = entity;
    }

    public async save(object: any) {
        let saveEntity: any = null;
        try {
            await sequelize.transaction(async (t) => {
                await this.entity.create(object, {transaction: t}).then((row: any) => {
                    Util.logger('save Dao Success', row);
                    saveEntity = row;
                    return;
                }).catch((err: any) => {
                    t.rollback();
                    Util.logger('save Dao Failed', err);
                    return;
                });
            });



            /* Utils.logger("Dao save object", object);
             saveEntity = new this.entity(object);
             await saveEntity.save().then((row: any) => {
                 Utils.logger('save Dao Success', row);
                 saveEntity = row;
                 return;
             }).catch((err: any) => {
                 Utils.logger('save Dao Failed', err);
                 saveEntity = null;
                 return;
             });*/
        } catch (err) {
            Util.logger('save Dao Error Log', err);
            throw err;
        } finally {
            if(saveEntity!=null)
                saveEntity = saveEntity.dataValues;
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
                    if(rows!=null){
                        for(let row of rows){
                            returnRows.push(row.dataValues);
                        }
                    }
                    return returnRows;
                }).catch((err: any) => {
                    return returnRows = err;
                });

            } else {
                await this.entity.findAll().then((rows: any) => {
                    if(rows!=null){
                        for(let row of rows){
                            returnRows.push(row.dataValues);
                        }
                    }
                    return returnRows;
                }).catch((err: any) => {
                    return returnRows = err;
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
        let resultRows: any = new Array<any>();
        try {
            await this.entity.findAll({
                where: whereClause
            }).then((rows: any) => {
                if(rows!=null){
                    for(let row of rows){
                        resultRows.push(row.dataValues);
                    }
                }
                return resultRows;
            }).catch((err: any) => {
                return resultRows = err;
            });
        } catch (err) {
            Utils.logger("Dao findAllByOneCondition Error" , err);
            throw err;
        } finally {

        }

        return resultRows;
    }

    public async getOneByCondition(whereCondition: object) {
        let resultRow: any = null;
        try {
            await this.entity.findOne({
                where: whereCondition
            }).then((row: any) => {
                if(row!=null)
                    return resultRow = row.dataValues;
            }).catch((err: any) => {
                return resultRow = err;
            });
        } catch (err) {
            Utils.logger("Dao getOneByCondition Error:  " , err);
            throw err;
        } finally {

        }
        return resultRow;
    }

    public async updateByCondition(model: object, whereCondition: object): Promise<any> {
        let result: any = null;
        try {
            result = await this.entity.update(
                model,
                {
                    where: whereCondition
                }
            ).then((success: any) => {
                Util.logger("Update success", success);
                return result = success;
            }).catch((err: any): any => {
                Util.logger("Update Failed", err);
                return result = err;
            });
        } catch (err) {
            Utils.logger("Dao updateByCondition Error ", err);
            throw err;
        } finally {

        }
        return result;
    }

    public async deleteByCondition(whereObject: Object) {
        let result: any = null;
        try {
            await this.entity.destroy({
                where: whereObject
            }).then((deleteCount: any) => {
                return result = deleteCount;
            }).catch((err: any) => {
                return result = err;
            });
        } catch (err) {
            Util.logger("Dao delete by condition ", err);
            throw err;
        }
        return result;
    }
}