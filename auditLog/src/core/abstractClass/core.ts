/**
 *Created By: Md. Nazmus Salahin
 *Created Date: 10/28/2017
 *Modified By:
 *Modified date:
 *(C) CopyRight Nybsys ltd.
 */
import {ICustomType} from "../interface/ICustomType";
import {globalModule} from "../global/module";

export default abstract class Core {
    customObject: ICustomType;

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