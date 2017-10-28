import BaseEntity from "../core/baseEntity";
import {Column, DataType, Table} from "sequelize-typescript";

@Table
export default class FinancialYear extends BaseEntity {

    @Column({primaryKey: true, autoIncrement: true})
    @Column(DataType.INTEGER)
    financialYearID: number;

    @Column(DataType.INTEGER)
    financialYearStart: number;

    @Column(DataType.INTEGER)
    financialYearEnd: number;

    @Column(DataType.DATE)
    openingBalanceDate: Date;

    @Column(DataType.DATE)
    lockmyDataAt: Date;
}