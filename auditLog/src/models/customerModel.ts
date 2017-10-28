/**
 * Customer model class
 */
import BaseModel from "../core/baseModel";

export default class Customer extends BaseModel {
    name: string;
    phone: string;
    email: string;

    constructor() {
        super();
        this.name='not init';
        this.phone='not init';
        this.email='zyx@example.com';
    }
}
