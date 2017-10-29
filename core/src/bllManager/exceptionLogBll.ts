/**
 *Created By: Md. Nazmus Salahin
 *Created Date: 10/18/2017
 *Modified By:
 *Modified date:
 *(C) CopyRight Nybsys ltd.
 */
import Dao from "../dataAccess/dao";


import {abstractBll} from "../core/abstractClass/baseBll";

export default class ExceptionLogBll extends abstractBll {
    dao: Dao;
    constructor() {
        super();
        //this.dao = new Dao(Entities.exceptionLog);
    }
}