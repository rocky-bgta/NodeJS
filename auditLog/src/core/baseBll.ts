/**
 *Created By: Md. Nazmus Salahin
 *Created Date: 10/16/2017
 *Modified By:
 *Modified date:
 *(C) CopyRight Nybsys ltd.
 */
import {globalModule} from "./global/module";
import {ICustomType} from "./ICustomType";
export default abstract class BaseBll {

    public customObject: ICustomType;
    constructor() {
        this.customObject = {};
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