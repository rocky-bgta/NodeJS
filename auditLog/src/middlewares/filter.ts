/**
 *Author: Md. Nazmus Salahin
 *Date: 10/4/2017
 *Time: 9:45 AM
 */
import * as express from 'express';
import ClientData from "../core/global/clientData";
import Util from "../utils/utils";
//import publicApiList from "../security/publicApiList"
//import UserRightMapperModel from "../models/userRightMapperModel";
//import * as Models from "../models"

let clientData: ClientData = new ClientData();

export default class Filter {

    constructor() {
    }



    public async getAllRoutes(app: express.Application) {
        let needAuthentication: boolean = false;
        let requestUrl: string = null;

         app.route("/*")
            .all(async (req: express.Request,
                  res: express.Response,
                  next: express.NextFunction) => {

                requestUrl = <string>req.originalUrl;

                if (requestUrl != null && requestUrl != undefined) {
                    let doc: boolean = requestUrl.includes('/api-docs/');
                    if (!doc) {
                        //needAuthentication = await this.checkPublicApi(requestUrl);
                        if (needAuthentication) {
                          await this.setClientData(req);
                        }
                    }
                }

                res.on('finish', function () {
                    Util.logger("Finished " + res.statusCode);  // for example
                });
                next();
            });
    }
/*
    private async checkPublicApi(url: string): Promise<boolean> {
        let result: boolean = false;
        for (let api of publicApiList) {
            if (_.isEqual(api, url)) {
                result = true;
                break;
            }
        }
        return result;
    }*/

    private async setClientData(req: express.Request) {

        let clientHeaderData: any,clientJsonData:ClientData;


        clientData.clientIP = <string>req.headers.host;
        clientData.address = <string>req.originalUrl;

        clientHeaderData = req.headers.clientdata;
        clientJsonData = JSON.parse(clientHeaderData);

      /*  clientData.token = clientJsonData.token;
        this.sessionModel = await this.sessionBll.getSessionDetails(clientData.token);
        clientData.sessionID = this.sessionModel.sessionID;
        clientData.businessID = this.sessionModel.businessID;
        clientData.userID = this.sessionModel.userID;*/


        clientData.pageName = clientJsonData.pageName;
        clientData.moduleID = clientJsonData.moduleID;

        //let accessRight: UserRightMapperModel[] = await this.userMapperBll.getUserMapper(clientData.userID);
        //clientData.accessRight = accessRight[0].accessRightID;

        //Util.logger('Client Data: ', clientJsonData);
        //Util.logger('sessionModel: ', this.sessionModel);


    }

}

export {clientData}