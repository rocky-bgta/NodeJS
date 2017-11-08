import Dao from "../dataAccess/dao";
import SessionModel from "../models/sessionModel";
import Util from "../utils/utils";
import * as Entities from "../entities/index";
import BaseBll from "../core/abstractClass/baseBll";
import Authentication from "../security/authentication";
import * as BLL from "../bllManager"
import UserRightMapperModel from "../models/userBusinessRightMapperModel";
import TokenModel from "../security/tokenModel";
import {Inject, Singleton} from "typescript-ioc";

@Singleton
export default class SessionBll extends BaseBll {
    dao: Dao;

    constructor() {
        super();
        this.dao = new Dao(Entities.session);
    }

    @Inject
    authentication: Authentication;

    @Inject
    userBusinessRightMapperBll: BLL.userBusinessRightMapper;

    //tokenModel: TokenModel

    public async createUserSession(userId: string, businessID: number, businessDBName: string) {
        try {
            let payload = this.customObject;
            let accessRight: UserRightMapperModel = await this.userBusinessRightMapperBll.finedOne(userId);

            payload.userID = userId;
            payload.businessID = businessID;
            payload.businessDBName = businessDBName;
            if(accessRight!=null && accessRight !=undefined)
                payload.accessRight = accessRight.accessRightID;

            let tokenModel: TokenModel;
            tokenModel = await this.authentication.generateToken(payload);

            let sessionModel = new SessionModel();
            sessionModel.userID = userId;
            sessionModel.token = tokenModel.token; //Utils.generateUniqueID(); //

            sessionModel.refreshToken = await  this.authentication.getRefreshToken(tokenModel.token);//Utils.generateUniqueID();
            sessionModel.businessID = businessID;
            sessionModel.businessDBName = businessDBName;
            let date = new Date();
            sessionModel.start = date;
            date.setDate(date.getDay() + 2);
            sessionModel.end = date;
            sessionModel.duration = 2;
            sessionModel.loginStatus = 1;
            sessionModel.status = 1;
            await this.dao.save(sessionModel);
            return sessionModel;
        } catch (err) {
            Util.logger("sessionBll createUserSession  Error:  ", err);
            throw err;
        }
    }

    public async getSessionDetails(token: string) {
        let whereCondition = this.customObject;
        try {
            whereCondition.token = token;
            let sessionModel: SessionModel = await this.dao.getOneByCondition(whereCondition);
            return sessionModel;
        } catch (err) {
            Util.logger("sessionBll getSessionDetails  Error:  ", err);
            throw err;
        }
    }

    public async updateSession(session: SessionModel, whereCondition: object) {
        let result;
        try {
            result = await this.dao.updateByCondition(session, whereCondition);
        } catch (err) {
            Util.logger("session userBll update Error : ", err);
            throw  err;
        }
        return result;
    }
}