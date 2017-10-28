import BaseEntity from "../core/baseEntity";
import {Column, DataType, Table} from "sequelize-typescript";

@Table
export default class Company extends BaseEntity {

    @Column({primaryKey: true, autoIncrement: true})
    @Column(DataType.INTEGER)
    companyID: number;

    @Column(DataType.STRING)
    name: string;

    @Column(DataType.INTEGER)
    subscriptionStatus: number;

    @Column(DataType.STRING)
    regNo: string;

    @Column(DataType.STRING)
    companyDB: string;

    @Column(DataType.INTEGER)
    status: number;
}
