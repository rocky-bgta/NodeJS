/**
 *Created By: Md. Nazmus Salahin
 *Created Date: 10/9/2017
 *Modified By:
 *Modified date:
 *(C) CopyRight Nybsys ltd.
 */

export default class ClientData {
    public clientIP: string;
    public token:string;
    public address:string;
    public userID:string;
    public businessID:number;
    public moduleID:number;
    public pageName:string;
    public accessRight:number;
    public sessionID: number;

    constructor(){
        this.clientIP=null;
        this.token=null;
        this.address=null;
        this.userID=null;
        this.businessID=null;
        this.moduleID=null;
        this.pageName=null;
        this.accessRight=null;
        this.sessionID=null;

    }
}