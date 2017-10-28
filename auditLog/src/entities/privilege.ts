import BaseEntity from "../core/baseEntity";
import {Column, DataType, Table} from "sequelize-typescript";

@Table
export default class Privilege extends BaseEntity {
    @Column({primaryKey: true, autoIncrement: true})
    @Column(DataType.INTEGER)
    privilegeID: number;

    @Column(DataType.INTEGER)
    parentID: number;

    @Column(DataType.STRING)
    actionCode: string;

    @Column(DataType.STRING)
    name: string;

    @Column(DataType.STRING)
    showName: string;
}