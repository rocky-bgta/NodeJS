/*
* Company model class
* */

import BaseModel from "../core/baseModel";

export default class CompanyModel extends BaseModel {
    companyID: number;
    name: string;
    subscriptionStatus: number;
    regNo: string;
    companyDB: string;
    createdBy: string;
    createdDate: Date;
    updatedBy: string;
    updatedDate: Date;
    status: number;

    constructor() {
        super();
    }
}