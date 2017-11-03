/**
 *Created By: Md. Nazmus Salahin
 *Created Date: 10/10/2017
 *Modified By:
 *Modified date:
 *(C) CopyRight Nybsys ltd.
 */
import ResponseMessage from "../responseMessage";
import BllExceptionLog from "../../bllManager/exceptionLogBll";
import {Inject} from "typescript-ioc";
import ExceptionLogModel from "../../models/exceptionLogModel";
import * as _ from 'lodash';
import Util from "../../utils/utils";
import {clientData} from "../../middlewares/filter";
import Core from "./core";

export default abstract class BaseFacade extends Core {
    private responseMessage: ResponseMessage;

    @Inject
    private bllExceptionLog: BllExceptionLog;

    constructor() {
        super();
    }

    async exceptionLogSave(serviceName: string,
                           requestObject: any,
                           errorObject: any,
                           priority: number = 1,
                           isSolved: boolean = false) {

        try {
            Util.logger('save ExceptionLog from base Facade');
            let result: any;
            let exceptionLogModel: ExceptionLogModel = new ExceptionLogModel();

            exceptionLogModel.priority = priority;
            exceptionLogModel.date = new Date();
            exceptionLogModel.pageName = clientData.pageName;
            exceptionLogModel.service = serviceName;
            exceptionLogModel.module = _.toString(clientData.moduleID);
            exceptionLogModel.userID = clientData.userID;
            exceptionLogModel.requestObject = requestObject;
            exceptionLogModel.message = errorObject.message;
            exceptionLogModel.messageTrace = errorObject;
            exceptionLogModel.isSolved = isSolved;

            result = await this.bllExceptionLog.saveExceptionLog(exceptionLogModel);
            return;

        } catch (err) {
            Util.logger('ExceptionLog from base Facade', err);
        }
        return;

    }


    getResponseMessBuilder(message: string, requestObject: any, code: any, token: any = null, businessID: any = 0): ResponseMessage {
        this.responseMessage = new ResponseMessage();
        this.responseMessage.setMessage(message);
        this.responseMessage.setResponseObject(requestObject);
        this.responseMessage.setResponseCode(code);
        this.responseMessage.setToken(token);
        this.responseMessage.setBusinessID(businessID);
        return this.responseMessage;
    }

}