/**
 *
 * :=  created by:  Shuza
 * :=  create date:  10/4/17
 * :=  (C) CopyRight NybSys Ltd
 * :=  Fun  :  Coffee  :  Code
 *
 **/

import BaseModel from "../core/baseModel";

export default class GstSettingsModel extends BaseModel {
    gstSettingsID: number;
    userID: string;
    businessID: number;
    isRegisterd: boolean;
    accountingBasic: number;
    reportingFrequency: number;
    selectedGstOption: number;
    selectedBasLodgement: number;
    annualReportDate: Date;

    constructor() {
        super();
        this.isRegisterd = true;
        this.accountingBasic = 1;
        this.reportingFrequency = 1;
        this.selectedGstOption = 1;
        this.selectedBasLodgement = 1;
        this.annualReportDate = new Date();
    }
}