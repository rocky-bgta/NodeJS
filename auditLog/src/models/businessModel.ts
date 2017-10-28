/*
* Business model class
* */

import BaseModel from "../core/baseModel";
import {Status} from "../core/enum/enums";

export default class BusinessModel extends BaseModel {
    businessID: number;
    companyID: number;
    serialNo: string;
    productTypeID: number;
    businessName: string;
    businessTypeID: number;
    businessDBName: string;
    phone: string;
    email: string;
    firstName: string;
    lastName: string;
    subscriptionStatus: number;
    owner: string;

    constructor() {
        super();
        this.status = Status.Active;
    }

}