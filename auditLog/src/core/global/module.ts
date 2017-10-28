/**
 *Created By: Md. Nazmus Salahin
 *Created Date: 10/16/2017
 *Modified By:
 *Modified date:
 *(C) CopyRight Nybsys ltd.
 */

let stringBuilder = require("string-builder");
let knex = require('knex')({client: 'pg'});
export const globalModule = {
    queryBuilder: knex,
    stringBuilder: stringBuilder
}