/*
* Address model class
* */

import BaseModel from "../core/baseModel";

export default class AddressModel extends BaseModel {
    addressID: number;
    businessID: number;
    typeID: number;
    address: string;
    suburb: string;
    state: string;
    postCode: string;
    country: number;

    constructor() {
        super();
    }
}