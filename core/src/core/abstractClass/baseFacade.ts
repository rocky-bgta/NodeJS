/**
 *Created By: Md. Nazmus Salahin
 *Created Date: 10/10/2017
 *Modified By:
 *Modified date:
 *(C) CopyRight Nybsys ltd.
 */

import {Inject} from "typescript-ioc";
import Core from "./core";
import ResponseMessage from "../responseMessage";
import RequestClientData from "../global/RequestClientData";
import ExceptionLogBll from "../../bllManager/exceptionLogBll";


export default abstract class BaseFacade extends Core {

    constructor() {
        super()
    }

    clientDataExport: RequestClientData;

    @Inject
    exceptionLogBll : ExceptionLogBll;

    responseMessage: ResponseMessage;

    getResponseMessBuilder(message: string, responseObject: any, code: any, token: any = null, businessID: any = 0): ResponseMessage {
        let result:ResponseMessage;
        this.responseMessage = new ResponseMessage();
        this.responseMessage.setMessage(message);
        this.responseMessage.setResponseObject(responseObject);
        this.responseMessage.setResponseCode(code);
        this.responseMessage.setToken(token);
        this.responseMessage.setBusinessID(businessID);
        result = this.responseMessage;
        return result;
    }

    abstract async exceptionLogSave(serviceName: string,
                           requestObject: any,
                           errorObject: any,
                           priority: number,
                           isSolved: boolean):Promise<any>;

}
