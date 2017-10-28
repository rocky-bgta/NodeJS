/**
 *Created By: Md. Nazmus Salahin
 *Created Date: 10/10/2017
 *Modified By:
 *Modified date:
 *(C) CopyRight Nybsys ltd.
 */


import Core from "./core";


export default abstract class BaseFacade extends Core {

    constructor() {
        super()
    }

    getResponseMessBuilder(message: string, responseObject: any, code: any, token: any = null, businessID: any = 0):any {
        let result;
        this.responseMessage = this.getResponseMessage();
        this.responseMessage.setMessage(message);
        this.responseMessage.setResponseObject(responseObject);
        this.responseMessage.setResponseCode(code);
        this.responseMessage.setToken(token);
        this.responseMessage.setBusinessID(businessID);
        result = this.responseMessage;
        return result;
    }

}
