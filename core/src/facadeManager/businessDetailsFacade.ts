/**
 *Created By: Md. Nazmus Salahin
 *Created Date: 10/9/2017
 *Modified By:
 *Modified date:
 *(C) CopyRight Nybsys ltd.
 */

/*
import {Inject} from 'typescript-ioc';
import ResponseMessage from '../core/responseMessage';
import RequestMessage from '../core/requestMessage';
import Utils from '../utils/utils';
import {Message} from '../core/messageConstant';
import * as Models from '../models';
import * as _ from 'lodash';
import BaseFacade from "../core/abstractClass/baseFacade";
import {ICustomType} from "../core/interface/ICustomType";
import AddressModel from "../models/addressModel";


import * as BLL from "../bllManager"

export default class BusinessDetailsFacade extends BaseFacade {

    @Inject
    private countryBll: BLL.country;
    @Inject
    private financialYearBll: BLL.financialYear;
    @Inject
    private businessContactBll: BLL.businessContact;
    @Inject
    private addressBll: BLL.address;
    @Inject
    private businessDetailsBll: BLL.businessDetails;
    @Inject
    private businessBll: BLL.business;

    private countryModel: Models.country;
    private financialYearModel: Models.financialYear;
    private businessContactModel: Models.businessContact;
    private businessDetailsModel: Models.businessDetails;
    private businessAddressList: Models.address[];
    private businessDetailsViewModel: Models.VMbusinessDetailsView;

    constructor() {
        super();
    }

    async saveCountry(reqMessage: RequestMessage) {
        let result;
        let responseMessage: ResponseMessage;
        try {
            Utils.logger('saveCountry method from facade');
            this.countryModel = <Models.country>reqMessage.requestObj;
            result = await this.countryBll.saveCountry(this.countryModel);
            responseMessage = this.getResponseMessBuilder(Message.SAVE_COUNTRY_SUCCESSFULLY, result, Message.SUCCESS_CODE);

        } catch (err) {
            Utils.logger('Error Log', err);
            responseMessage = this.getResponseMessBuilder(Message.FAILED_TO_SAVE_COUNTRY, reqMessage.requestObj, Message.FAILED_ERROR_CODE);
            this.exceptionLogSave('saveCountry', reqMessage, err);
        }
        return responseMessage;
    }

    async getCountries() {
        let result;
        let responseMessage: ResponseMessage;
        Utils.logger('getCountries method from facade');
        try {
            result = await this.countryBll.getAllCountries();
            //await this.resMessage.setResponseObject(result);
            responseMessage = this.getResponseMessBuilder(Message.GET_ALL_COUNTRIES, result, Message.SUCCESS_CODE);
        } catch (err) {
            Utils.logger('Error Log', err);
            responseMessage = this.getResponseMessBuilder(Message.FAILED_TO_GET_COUNTRIES, null, Message.FAILED_ERROR_CODE);
            this.exceptionLogSave('getCountries', null, err);
        }
        return responseMessage;
    }

    async saveFinancialYear(reqMessage: RequestMessage) {
        let result;
        let responseMessage: ResponseMessage;
        try {
            Utils.logger('saveFinancialYear method from facade');
            this.financialYearModel = <Models.financialYear>reqMessage.requestObj;
            result = await this.financialYearBll.saveFinancialYear(this.financialYearModel);
            responseMessage = this.getResponseMessBuilder(Message.SAVE_FINANCIAL_YEAR_SUCCESSFULLY, result, Message.SUCCESS_CODE);
        } catch (err) {
            Utils.logger('Error Log', err);
            responseMessage = this.getResponseMessBuilder(Message.FAILED_TO_SAVE_FINANCIAL, reqMessage.requestObj, Message.FAILED_ERROR_CODE);
            this.exceptionLogSave('saveFinancialYear', reqMessage, err);
        }
        return responseMessage;
    }

    async getFinancialYears() {
        let result;
        let responseMessage: ResponseMessage;

        Utils.logger('getFinancialYear method from facade');
        try {
            result = await this.financialYearBll.getAllFinancialYears();
            //await this.resMessage.setResponseObject(result);
            responseMessage = this.getResponseMessBuilder(Message.GET_ALL_FINANCIAL_YEARS, result, Message.SUCCESS_CODE);
        } catch (err) {
            Utils.logger('Error Log', err);
            responseMessage = this.getResponseMessBuilder(Message.FAILED_TO_GET_FINANCIAL_YEARS, null, Message.FAILED_ERROR_CODE);
            this.exceptionLogSave('getFinancialYears', responseMessage, err);
        }
        return responseMessage;
    }

    async saveBusinessContact(reqMessage: RequestMessage) {
        let result;
        let responseMessage: ResponseMessage;
        try {
            Utils.logger('saveBusinessContact method from facade');
            this.businessContactModel = <Models.businessContact>reqMessage.requestObj;
            result = await this.businessContactBll.saveBusinessContact(this.businessContactModel);
            responseMessage = this.getResponseMessBuilder(Message.SAVE_BUSINESS_CONTACT_SUCCESSFULLY, result, Message.SUCCESS_CODE);
        } catch (err) {
            Utils.logger('Error Log', err);
            responseMessage = this.getResponseMessBuilder(Message.FAILED_TO_SAVE_BUSINESS_CONTACT, reqMessage.requestObj, Message.FAILED_ERROR_CODE);
            this.exceptionLogSave('saveBusinessContact', reqMessage, err);
        }
        return responseMessage;
    }

    async getBusinessContacts() {
        let result;
        let responseMessage: ResponseMessage;
        Utils.logger('getBusinessContacts method from facade');
        try {
            result = await this.businessContactBll.getAllBusinessContacts();
            responseMessage = this.getResponseMessBuilder(Message.GET_ALL_BUSINESS_CONTACTS, result, Message.SUCCESS_CODE);
        } catch (err) {
            Utils.logger('Error Log', err);
            responseMessage = this.getResponseMessBuilder(Message.FAILED_TO_GET_BUSINESS_CONTACTS, null, Message.FAILED_ERROR_CODE);
            this.exceptionLogSave('getBusinessContacts', null, err);
        }
        return responseMessage;
    }

    async getBusinessDetails(reqMessage: RequestMessage) {
        let businessID;
        let responseMessage: ResponseMessage;
        let businessModel: Models.business;
        let buildMessage = this.getStringBuilder();
        let result: Models.VMbusinessDetailsView, crudSteps: boolean = true;
        try {

            ///////// start example use of raw query ////////////
            //rawQueryResult= await this.businessDetailsService.VMgetBusinessDetails();
            //rawQueryResult.forEach((item:any)=>{
            //    Util.logger('item',item.emailAddress);
            //})
            ///////// end example use of raw query ////////////
            businessID = _.toNumber(reqMessage.businessID);
            let fieldName: string = 'businessID';

            // find one Business details
            let businessDetailsModel = await this.businessDetailsBll.findOne(fieldName, businessID);

            //get only business name =========================================
            if(businessDetailsModel==null){
                this.businessDetailsViewModel = new Models.VMbusinessDetailsView();

                businessModel = await this.businessBll.finedOne(fieldName,businessID);

                this.businessDetailsViewModel.business =businessModel;// businessModel;
                result = this.businessDetailsViewModel;

                responseMessage = this.getResponseMessBuilder(Message.GET_ALL_BUSINESS_DETAILS_SUCCESSFULLY, result, Message.SUCCESS_CODE);
                return responseMessage;

            }
            //========================================================
            if (businessDetailsModel != null) {
                buildMessage.append(Message.GET_ALL_BUSINESS_DETAILS);
            } else {
                buildMessage.append(Message.FAILED_TO_GET_BUSINESS_DETAILS);
                crudSteps = false;
            }

            buildMessage.appendLine();

            let businessContactModel = await this.businessContactBll.findOne(fieldName, businessID);
            if (businessContactModel != null && crudSteps) {
                buildMessage.append(Message.GET_ALL_BUSINESS_CONTACTS);
            } else {
                buildMessage.append(Message.FAILED_TO_GET_BUSINESS_CONTACTS);
                crudSteps = false;
            }
            buildMessage.appendLine();

            let businessAddressList = await this.addressBll.findAllById(businessID);
            if (businessAddressList != null && crudSteps) {
                buildMessage.append(Message.GET_ALL_BUSINESS_ADDRESS_LIST);
            } else {
                buildMessage.append(Message.FAILED_TO_GET_BUSINESS_ADDRESS_LIST);
                crudSteps = false;
            }
            buildMessage.appendLine();

            businessModel = await this.businessBll.finedOne(fieldName,businessID);
            if(businessModel && crudSteps){
                buildMessage.append(Message.GET_ALL_BUSINESS);
            } else {
                buildMessage.append(Message.FAILED_TO_GET_BUSINESS);
                crudSteps = false;
            }

            //buildMessage.appendLine();
            // update VM after find specific business and return VM
            if (crudSteps) {
                this.businessDetailsViewModel = new Models.VMbusinessDetailsView();
                this.businessDetailsViewModel.businessDetails = businessDetailsModel;
                this.businessDetailsViewModel.businessContact = businessContactModel;
                this.businessDetailsViewModel.businessAddressList = businessAddressList;
                this.businessDetailsViewModel.business = businessModel;
                result = this.businessDetailsViewModel;

                responseMessage = this.getResponseMessBuilder(Message.GET_ALL_BUSINESS_DETAILS_SUCCESSFULLY, result, Message.SUCCESS_CODE);
            } else {
                responseMessage = this.getResponseMessBuilder(Message.FAILED_TO_GET_BUSINESS_DETAILS, reqMessage.requestObj, Message.FAILED_ERROR_CODE);
            }

        } catch (err) {
            Utils.logger('Error Log', err);
            responseMessage = this.getResponseMessBuilder(Message.FAILED_TO_GET_BUSINESS_DETAILS, reqMessage.requestObj, Message.FAILED_ERROR_CODE);
            this.exceptionLogSave('getBusinessDetails', reqMessage, err);
        }
        return responseMessage;
    }

    async saveBusinessDetails(reqMessage: RequestMessage) {
        //let addressType;
        let responseMessage: ResponseMessage;
        let businessID = _.toNumber(reqMessage.businessID);
        let result: Models.VMbusinessDetailsView, crudSteps: boolean = true;
        let buildMessage = this.getStringBuilder();
        try {
            this.businessDetailsViewModel =
                <Models.VMbusinessDetailsView>reqMessage.requestObj;

            // update vm with provided businessID
            this.businessDetailsViewModel.businessDetails.businessID = businessID;
            this.businessDetailsViewModel.businessContact.businessID = businessID;

            // Extract data from VM
            this.businessDetailsModel = this.businessDetailsViewModel.businessDetails;
            this.businessAddressList = this.businessDetailsViewModel.businessAddressList;
            this.businessContactModel = this.businessDetailsViewModel.businessContact;


            // hold model after save
            this.businessDetailsModel = await this.businessDetailsBll.saveBusinessDetails(this.businessDetailsModel);
            if (this.businessDetailsModel != null) {
                buildMessage.append(Message.SAVE_BUSINESS_DETAILS_SUCCESSFULLY);
            } else {
                buildMessage.append(Message.FAILED_TO_SAVE_BUSINESS_DETAILS);
                crudSteps = false;
            }

            this.businessContactModel = await this.businessContactBll.saveBusinessContact(this.businessContactModel);
            if (this.businessContactModel != null && crudSteps) {
                buildMessage.append(Message.SAVE_BUSINESS_CONTACT_SUCCESSFULLY);
            } else {
                buildMessage.append(Message.FAILED_TO_SAVE_BUSINESS_CONTACT);
                crudSteps = false;
            }

            if (crudSteps) {
                for (let index in this.businessAddressList) {
                    this.businessAddressList[index].businessID = businessID;
                    this.businessAddressList[index] = await this.addressBll.saveAddress(this.businessAddressList[index]);
                }
            }

            if (crudSteps) {
                // update VM after save and return VM
                this.businessDetailsViewModel.businessDetails = this.businessDetailsModel;
                this.businessDetailsViewModel.businessContact = this.businessContactModel;
                this.businessDetailsViewModel.businessAddressList = this.businessAddressList;
                result = this.businessDetailsViewModel;

                responseMessage = this.getResponseMessBuilder(Message.SAVE_BUSINESS_DETAILS_SUCCESSFULLY, result, Message.SUCCESS_CODE);
            } else {
                responseMessage = this.getResponseMessBuilder(Message.FAILED_TO_SAVE_BUSINESS_DETAILS, reqMessage.requestObj, Message.FAILED_ERROR_CODE);
            }

        } catch (err) {
            Utils.logger('Error Log', err);
            responseMessage = this.getResponseMessBuilder(Message.FAILED_TO_GET_BUSINESS_DETAILS, reqMessage.requestObj, Message.FAILED_ERROR_CODE);
            this.exceptionLogSave('saveBusinessDetails', reqMessage, err);
        }
        return responseMessage;
    }

    async updateBusinessDetails(reqMessage: RequestMessage) {
        let result: Models.VMbusinessDetailsView, crudSteps: boolean = true;
        let responseMessage: ResponseMessage;
        try {
            this.businessDetailsViewModel =
                <Models.VMbusinessDetailsView>reqMessage.requestObj;
            let businessID = _.toNumber(reqMessage.businessID);
            let fieldName = 'businessID';

            let businessDetailsModel: any,
                businessAddressList: any = new Array<any>(),
                businessContactModel: any;


            // Extract data from VM
            this.businessDetailsModel = this.businessDetailsViewModel.businessDetails;
            this.businessAddressList = this.businessDetailsViewModel.businessAddressList;
            this.businessContactModel = this.businessDetailsViewModel.businessContact;
            //this.businessModel = this.businessDetailsViewModel.business;

            let whereCondition = {
                businessID: businessID
            };

            // hold model after update
            businessDetailsModel =
                await this.businessDetailsBll.updateBusinessDetails(this.businessDetailsModel, whereCondition);
            Utils.logger('return after update ', businessDetailsModel[0]);
            if (businessDetailsModel != null) {
                ;
            } else {
                crudSteps = false;
            }

            // hold model after update
            if (crudSteps) {
                businessContactModel =
                    await this.businessContactBll.updateBusinessContact(this.businessContactModel, whereCondition);
                Utils.logger('return after update ', businessContactModel[0]);
            } else {
                crudSteps = false;
            }

            // where clause for businessAddressEntity
            let whereClause: ICustomType = {};

            if (crudSteps) {
                for (let index in this.businessAddressList) {
                    let addressID = this.businessAddressList[index].addressID;

                    if (addressID == 0) {
                        //insert new address
                        let addressModel: AddressModel = this.businessAddressList[index];
                        delete addressModel.addressID; // delete property
                        addressModel.businessID = businessID;
                        this.businessAddressList[index] = await this.addressBll.saveAddress(addressModel);
                    } else {

                        whereClause.businessID = businessID;
                        whereClause.addressID = this.businessAddressList[index].addressID;

                        // update businessID to businessAddressList before update
                        this.businessAddressList[index].businessID = businessID;
                        // hold model after update
                        businessAddressList[index] = await this.addressBll.updateAddress(this.businessAddressList[index], whereClause);
                    }
                    Utils.logger('return after update ', businessAddressList[index]);
                }
            }

            if (businessDetailsModel != null && businessAddressList != null && businessContactModel != null) {
                Utils.logger('Update operation successful');
                Utils.logger('Populate Models after update');
                let businessDetailsModel = await this.businessDetailsBll.findOne(fieldName, businessID);
                let businessContactModel = await this.businessContactBll.findOne(fieldName, businessID);
                let businessAddressList = await this.addressBll.findAllById(businessID);

                Utils.logger('update VM after update');
                this.businessDetailsViewModel.businessDetails = businessDetailsModel;
                this.businessDetailsViewModel.businessContact = businessContactModel;
                this.businessDetailsViewModel.businessAddressList = businessAddressList;
                result = this.businessDetailsViewModel;

                responseMessage = this.getResponseMessBuilder(Message.UPDATE_BUSINESS_DETAILS_SUCCESSFULLY, result, Message.SUCCESS_CODE);

            } else {
                responseMessage = this.getResponseMessBuilder(Message.FAILED_TO_UPDATE_BUSINESS_DETAILS, reqMessage.requestObj, Message.FAILED_ERROR_CODE);
            }

        } catch (err) {
            Utils.logger('Error Log', err);
            responseMessage = this.getResponseMessBuilder(Message.FAILED_TO_UPDATE_BUSINESS_DETAILS, reqMessage.requestObj, Message.FAILED_ERROR_CODE);
            this.exceptionLogSave('updateBusinessDetails', reqMessage, err);
        }
        return responseMessage;
    }
}*/
