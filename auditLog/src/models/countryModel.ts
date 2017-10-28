/*
* Country model class
* */

import BaseModel from "../core/baseModel";

export default class CountryModel extends BaseModel {
    countryID: number;
    countryCode: string;
    name: string;

    constructor() {
        super();
        this.name='not init';
        this.countryCode='not init';
    }
}