

export default class ErrorLogModel{

     errorLogID:number;
     controller: string;
     dateTime: Date;
     priority: number;
     pageName: string;
     service: string;
     module: string;
     facade: string;
     userId: string;
     object: string;
     message: string;
     messageTrace: any;
     isSolve: boolean;
     daoAction: string;
     serviceAction: string;
     facadeAction: string;

    constructor(){
        this.dateTime = new Date();
        this.facade = 'No facade name provided';
        this.priority= 1;
        this.pageName='No page name has been set';
        this.service='No userBll has been set';
        this.module='No module name has been set';
        this.userId='Anonymous';
        this.serviceAction='Service action not executed';
        this.facadeAction='Service action not executed';
        this.object='No object has been set';
        this.message='No error message has been set';
        this.messageTrace='No stack trace message object has been set';
        this.isSolve=false;
    }

   /* getFacadeAction(): string {
        return this.facadeAction;
    }

    setFacadeAction(value: string) {
        this.facadeAction = value;
    }

    getServiceAction(): string {
        return this.serviceAction;
    }

    setServiceAction(value: string) {
        this.serviceAction = value;
    }

    getDaoAction(): string {
        return this.daoAction;
    }

    setDaoAction(value: string) {
        this.daoAction = value;
    }

    getFacade(): string {
        return this.facade;
    }

    setFacade(value: string) {
        this.facade = value;
    }

    getController(): string {
        return this.controller;
    }

    setController(value: string) {
        this.controller = value;
    }

    getDateTime(): Date {
        return this.dateTime;
    }

    setDateTime(value: Date) {
        this.dateTime = value;
    }

    getPriority(): number {
        return this.priority;
    }

    setPriority(value: number) {
        this.priority = value;
    }

    getPageName(): string {
        return this.pageName;
    }

    setPageName(value: string) {
        this.pageName = value;
    }

    getService(): string {
        return this.userBll;
    }

    setService(value: string) {
        this.userBll = value;
    }

    getModule(): string {
        return this.module;
    }

    setModule(value: string) {
        this.module = value;
    }

    getUserId(): string {
        return this.userId;
    }

    setUserId(value: string) {
        this.userId = value;
    }

    getObject(): string {
        return this.object;
    }

    setObject(value: string) {
        this.object = value;
    }

    getMessage(): string {
        return this.message;
    }

    setMessage(value: string) {
        this.message = value;
    }

    getMessageTrace(): any {
        return this.messageTrace;
    }

    setMessageTrace(value: any) {
        this.messageTrace = value;
    }

    getIsSolve(): boolean {
        return this.isSolve;
    }

    setIsSolve(value: boolean) {
        this.isSolve = value;
    }
*/
}