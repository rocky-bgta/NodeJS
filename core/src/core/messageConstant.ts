/**
 *Created By: Md. Nazmus Salahin
 *Created Date: 10/21/2017
 *Modified By:
 *Modified date:
 *(C) CopyRight Nybsys ltd.
 */
export const Message = {
    //---------Common Message----------

    INVALID_REQUEST: 'Invalid request',
    NOT_A_VALID_USER: 'Not a Valid User',

    DUPLICATE_USER: 'Duplicate user',

    INVALID_DATA: 'Invalid data',
    ACCESS_DENY: 'Access permission required',

    NO_CONTENT: 'No Content',
    NO_CONTENT_CODE: 204,

    PARTIAL_CONTENT: 'Partial Content',
    PARTIAL_CONTENT_CODE: 206,

    SUCCESS: 'Success',
    SUCCESS_CODE: 200,

    REDIRECT: 'Redirect Page',
    REDIRECT_CODE: 302,

    FAILED: 'Not Found',
    FAILED_ERROR_CODE: 404,

    BAD_REQUEST: 'Bad Request',
    BAD_REQUEST_CODE: 400,

    PAYMENT_REQUIRED: 'Payment Required',
    PAYMENT_REQUIRED_CODE: 402,

    FORBIDDEN: 'Forbidden',
    FORBIDDEN_CODE: 403,

    REQUEST_TIMEOUT: 'Request Timeout',
    REQUEST_TIMEOUT_CODE: 408,

    CONFLICT: 'Conflict',
    CONFLICT_CODE: 409,

    LOCKED: 'Locked',
    LOCKED_CODE: 423,

    TOO_MANY_REQUESTS: 'Too Many Request',
    TOO_MANY_REQUESTS_CODE: 429,

    INTERNAL_SERVER_ERROR: 'Internal Server Error',
    INTERNAL_SERVER_ERROR_CODE: 500,

    NOT_IMPLEMENTED_ERROR: 'Not Implemented Error',
    NOT_IMPLEMENTED_ERROR_CODE: 501,

    SERVICE_UNAVAILABLE_ERROR: 'Service Unavailable Error',
    SERVICE_UNAVAILABLE_ERROR_CODE: 503,

    UNAUTHORIZED_USER: 'Unauthorized',
    UNAUTHORIZED_CODE: 401,

    SUSPENDED: 'Suspended',
    WRONG_USER_NAME_PASSWORD: 'User Name Or Password not matched',

    EMAIL_NOT_FOUND: 'Email Not Found',

    INVALID_TOKEN: 'Invalid Token',
    INVALID_TOKEN_CODE: 400,

    INACTIVE: 'Inactive',

    USER_NOT_FOUND: 'User Not Found',

    OPERATION_FAILED: 'Operation Failed',

    //--------USER SIGN UP--------------
    SIGN_UP_SUCCESSFULLY: 'Sign up Successfully',
    FAILED_TO_SIGN_UP: 'Failed to sign up',

    //---------User Login----------------
    SUCCESSFULLY_LOGIN: 'Successfully login',
    FAILED_TO_LOGIN: 'Failed to login',

    //---------User List-------------------
    GET_USER_LIST_SUCCESSFULLY: 'Get user list successfully',
    FAILED_TO_GET_USER_LIST: 'Failed to get user list',

    //---------Change Password----------------
    SAVE_PASSWORD_SUCCESSFULLY: 'Password save successfully',
    FAILED_TO_SAVE_PASSWORD: 'Failed to save password',

    FAILED_TO_CHANGE_PASSWORD: 'Failed to change password',

    //---------Invite User----------------
    INVITE_USER_SUCCESSFULLY: 'Invite User successfully',
    FAILED_TO_SEND_USER_INVITE: 'Failed to Invite User',

    //---------Reinvite User----------------
    REINVITE_USER_SUCCESSFULLY: 'Reinvite user successfully',
    FAILED_TO_REINVITE_USER: 'Failed to reinvite user',

    //-----------Remove Invitation------------
    REMOVE_INVITATION_SUCCESSFULLY: 'Remove invitation successfully',
    FAILED_TO_REMOVE_INVITATION: 'Failed to remove invitation',

    //---------Business----------------
    INVALID_BUSINESSID: 'Invalid BusinessID',
    ALREADY_USER_WITH_BUSINESSID: 'Already Business With BusinessID',

    SAVE_BUSINESS_SUCCESSFULLY: 'Save business successfully',
    FAILED_TO_SAVE_BUSINESS: 'Failed to save business',

    BUSINESS_SELECT_SUCCESSFULLY: 'Business select successfully',
    FAILED_TO_SELECT_BUSINESS: 'Failed to select business',

    BUSINESSID_REQUIRED: 'BusinessID required',

    GET_ALL_BUSINESS_OPTION_SUCCESSFULLY: 'Get all business options successfully',
    FAILED_TO_GET_ALL_BUSINESS_OPTION: 'Failed to get all business option',

    //------------Invitation Token--------------
    SAVE_TOKEN_SUCCESSFULLY: 'Token save successfully',
    FAILED_TO_GENERATE_TOKEN: 'Failed to save Token',

    INVALID_INVITATION_TOKEN: 'Invalid Invitation Token',

    //---------Role----------------
    SAVE_ROLE_SUCCESSFULLY: 'Role save successfully',
    FAILED_TO_SAVE_ROLE: 'Failed to save role',

    UPDATE_ROLE_SUCCESSFULLY: 'Role update successfully',
    FAILED_TO_UPDATE_ROLE: 'Failed to update role',

    GET_ROLE_LIST_SUCCESSFULLY: 'Get role list Successfully',
    FAILED_TO_GET_ROLE_LIST: 'Failed to get role list',

    SUCCESSFULLY_CREATE_BUSINESS: 'Successfully create business',
    FAILED_TO_CREATE_BUSINESS: 'Failed to create business',

    MAIL_SEND_SUCCESSFULLY: 'Mail send successfully',

    //--------------Update user---------------
    UPDATE_USER_SUCCESSFULLY: 'User update successfully',
    FAILED_TO_UPDATE_USER: 'Failed to update user',

    NO_GST_SETTINGS_FOUND: 'No Gst settings found',

    //---------------Privilege Role----------------
    SAVE_PRIVILEGE_ROLE_SUCCESSFULLY: 'Save privilege role successfully',
    FAILED_TO_SAVE_PRIVILEGE_ROLE: 'Failed to save privilege role',

    GET_ALL_ROLE_MAPPING: 'Get all role mapping',
    FAILED_TO_GET_ALL_ROLE_MAPPING: 'Failed to get all role mapping',

    GET_ALL_MAPPING: 'Get all mapping',
    FAILED_TO_GET_ALL_MAPPING: 'Failed to get all mapping',

    SAVE_COUNTRY_SUCCESSFULLY: 'Country save successfully',
    FAILED_TO_SAVE_COUNTRY: 'Failed to save country',

    GET_ALL_COUNTRIES: 'Get all countries',
    FAILED_TO_GET_COUNTRIES: 'Failed to get countries',

    SAVE_FINANCIAL_YEAR_SUCCESSFULLY: 'Financial year save successfully',
    FAILED_TO_SAVE_FINANCIAL: 'Failed to save financial year',

    GET_ALL_FINANCIAL_YEARS: 'Get all financial years',
    FAILED_TO_GET_FINANCIAL_YEARS: 'Failed to get financial years',

    SAVE_BUSINESS_CONTACT_SUCCESSFULLY: 'Business Contact save successfully',
    FAILED_TO_SAVE_BUSINESS_CONTACT: 'Failed to save business contact',

    GET_ALL_BUSINESS_CONTACTS: 'Get all business contacts',
    FAILED_TO_GET_BUSINESS_CONTACTS: 'Failed to get business contacts',

    GET_ALL_BUSINESS_DETAILS: 'Get all business details',
    FAILED_TO_GET_BUSINESS_DETAILS: 'Failed to get business details',

    GET_ALL_BUSINESS_ADDRESS_LIST: 'Get all business address list',
    FAILED_TO_GET_BUSINESS_ADDRESS_LIST: 'Failed to get business address list',

    GET_ALL_BUSINESS: 'Get all business address',
    FAILED_TO_GET_BUSINESS: 'Failed to get business address',

    SAVE_BUSINESS_DETAILS_SUCCESSFULLY: 'Business details save successfully',
    FAILED_TO_SAVE_BUSINESS_DETAILS: 'Failed to save business details',

    UPDATE_BUSINESS_DETAILS_SUCCESSFULLY: 'Business details update successfully',
    FAILED_TO_UPDATE_BUSINESS_DETAILS: 'Failed to update business details',

    FAILED_EXPECTATION_CODE: 417,
    GET_ALL_BUSINESS_DETAILS_SUCCESSFULLY: 'All business details',

    SAVE_ACCESS_RIGHT_SUCCESSFULLY: 'Access Right save successfully',
    FAILED_TO_SAVE_ACCESS_RIGHT: 'Failed to Access Right',

    UPDATE_ACCESS_RIGHT_SUCCESSFULLY: 'Access Right update successfully',
    FAILED_TO_UPDATE_ACCESS_RIGHT: 'Failed to update access right',

    GET_ALL_ACCESS_RIGHT: 'Get all access rights',
    FAILED_TO_GET_ACCESS_RIGHT: 'Failed to get business details',

    SAVE_PRIVILEGE_SERVICE_MAPPING_SUCCESSFULLY: 'Privilege service mapping save successfully',
    FAILED_TO_SAVE_PRIVILEGE_SERVICE_MAPPING: 'Failed to save privilege service mapping',//'PrivilegeFacade service mapping failed',

    UPDATE_PRIVILEGE_SERVICE_MAPPING_SUCCESSFULLY: 'Update privilege service mapping succesfully',
    FAILED_TO_UPDATE_PRIVILEGE_SERVICE_MAPPING: 'Failed to update privilege service mapping',

    GET_ALL_PRIVILEGE_SERVICE_MAPPING_SUCCESSFULLY: 'Get all privilege service mapping successfully',
    FAILED_TO_GET_ALL_PRIVILEGE_SERVICE_MAPPING: 'Failed to get all privilege service mapping',

    USER_ACTIVATE_SUCCESSFULLY: 'User activate successfully',
    FAILED_TO_ACTIVATE_USER: 'Failed to activate user',
    FAILED_TO_INACTIVATE_USER: 'Failed to inactivate user',

    ONLY_OWNER_CAN_INACTIVE_USER: 'Only businessModel owner can inactivate user',
    INACTIVATE_USER_SUCCESSFULLY: 'Inactivate user successfully',

    NO_BUSINESS_FOUND: 'No business found',
    BUSINESS_ALREADY_EXIST: 'Business already exist',

    ROLE_ID_REQUIRED: 'RoleID required',

    SAVE_ACCESS_RIGHT_ROLE_MAPPING_SUCCESSFULLY: 'Access right role mapping save successfully',
    FAILED_TO_SAVE_ACCESS_RIGHT_ROLE_MAPPING: 'Failed to save Access right role',

    GET_ALL_ACCESS_RIGHT_ROLE_MAPPING: 'Get all Access right role mapping',
    FAILED_TO_GET_ACCESS_RIGHT_ROLE_MAPPING: 'Failed to get Access right role mapping',

    UPDATE_ACCESS_RIGHT_ROLE_SUCCESSFULLY: 'Access right role mapping update successfully',
    FAILED_TO_UPDATE_RIGHT_ROLE_MAPPING: 'Failed to update Access right role mapping',

    GET_PRIVILEGE_LIST_SUCCESSFULLY: 'Get privilege list successfully',
    FAILED_TO_GET_PRIVILEGE_LIST: 'Failed to get privilege list',

    UPDATE_PRIVILEGE_SUCCESSFULLY: 'Update privilege successfully',
    FAILED_TO_UPDATE_PRIVILEGE: 'Failed to update privilege',

    SAVE_PRIVILEGE_SUCCESSFULLY: 'Save privilege successfully',
    FAILED_TO_SAVE_PRIVILEGE: 'Failed to save privilege',

    GET_GST_SETTING_SUCCESSFULLY: 'Get gst setting successfully',
    FAILED_TO_GET_GST_SETTING: 'Failed to get gst setting',

    UPDATE_GST_SETTING_SUCCESSFULLY: 'Update gst setting successfully',
    FAILED_TO_UPDATE_GST_SETTING: 'Failed to update gst setting',

    ADD_GST_SUCCESSFULLY: 'Add gst successfully',
    FAILED_TO_ADD_GST: 'Failed to add gst',

};