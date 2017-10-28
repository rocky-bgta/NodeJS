/**
 *Created By: Md. Nazmus Salahin
 *Created Date: 10/18/2017
 *Modified By:
 *Modified date:
 *(C) CopyRight Nybsys ltd.
 */
export default class ExceptionLogModel{

    exceptionLogID: number;
    date: Date;
    priority: number;
    pageName: string;
    service: string;
    module: string;
    userID: string;
    requestObject: string;
    message: string;
    messageTrace: string;
    isSolved: boolean;

    constructor(){

        this.date = new Date();
        this.priority = 0;
        this.pageName = 'not init';
        this.service = 'not init';
        this.module = 'not init';
        this.userID = 'not init';
        this.requestObject = 'not init';
        this.message = 'not init';
        this.messageTrace = 'not init';
        this.isSolved = false;
    }
}