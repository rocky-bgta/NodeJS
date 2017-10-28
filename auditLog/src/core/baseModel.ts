import {Status} from "./enum/enums";

export default abstract class BaseModel {

    createdBy: string;
    createdDate: Date;
    updatedBy: string;
    updatedDate: Date;
    status: number;

    constructor() {
        this.status = Status.Active;
    }
}