import BaseEntity from "../core/baseEntity";
import {AutoIncrement, Column, DataType, PrimaryKey, Table} from "sequelize-typescript";

@Table
export default class UserRightMapper extends BaseEntity {


    @PrimaryKey
    @AutoIncrement
    @Column
    userRightMapperID: number;

    @Column({type: DataType.STRING, unique: 'compositeUnique'})
    userID: string;

    @Column(DataType.STRING)
    firstName: string;

    @Column(DataType.STRING)
    lastName: string;

    @Column({type: DataType.STRING, unique: 'compositeUnique'})
    businessID: number;

    @Column(DataType.INTEGER)
    accessRightID: number;

    @Column(DataType.INTEGER)
    status: number;


}