/*
* RolePrivilegeMapping model class
* */

import BaseModel from "../core/baseModel";

export default class RolePrivilegeMappingModel extends BaseModel {
    rolePrivilegeMappingID: number;
    roleID: number;
    privilegeID: number;

    constructor() {
        super();
    }
}