/*
* Privilege model class
* */

import BaseModel from "../core/baseModel";

export default class PrivilegeModel extends BaseModel {

    privilegeID: number;
    parentID: number;
    actionCode: string;
    name: string;
    showName: string;

    constructor() {
        super();
    }
}