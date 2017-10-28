/*
* Role model class
* */

import BaseModel from "../core/baseModel";

export default class RoleModel extends BaseModel {
    roleID: number;
    name: string;
    description: string;

    constructor() {
        super();
    }
}