/**
 *Created By: Md. Nazmus Salahin
 *Created Date: 10/28/2017
 *Modified By:
 *Modified date:
 *(C) CopyRight Nybsys ltd.
 */
import ResponseMessage from "../responseMessage";
import {ICustomType} from "../interface/ICustomType";
import {globalModule} from "../global/module";

export default abstract class Core {
    responseMessage: ResponseMessage;
    customObject: ICustomType;

    constructor() {
        this.customObject = {};
    }

    getResponseMessage(){
        this.responseMessage = new ResponseMessage();
        return this.responseMessage;
    }

    public getRawQueryBuilder(){
        let result = globalModule.queryBuilder;
        return result;
    }

    public getStringBuilder(){
        let result;
        result = new globalModule.stringBuilder();
        return result;
    }
}