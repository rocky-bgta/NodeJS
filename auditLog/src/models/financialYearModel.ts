/*
* financialYear model class
* */

import BaseModel from "../core/baseModel";

export default class FinancialYearModel extends BaseModel {
    financialYearID: number;
    financialYearStart: number;
    financialYearEnd: number;
    openingBalanceDate: Date;
    lockmyDataAt: Date;

    constructor() {
        super();
    }
}