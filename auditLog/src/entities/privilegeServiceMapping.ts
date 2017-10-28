/**
 *
 * :=  created by:  Shuza
 * :=  create date:  10/24/17
 * :=  (C) CopyRight NybSys Ltd
 * :=  Fun  :  Coffee  :  Code
 *
 **/
import BaseEntity from "../core/baseEntity";
import {Column, DataType, Table} from "sequelize-typescript";

@Table
export default class PrivilegeServiceMapping extends BaseEntity {
    @Column({primaryKey: true, autoIncrement: true})
    @Column(DataType.INTEGER)
    privilegeServiceMappingID: number;

    @Column(DataType.INTEGER)
    privilegeID: number;

    @Column(DataType.STRING)
    serviceURI: string;
}