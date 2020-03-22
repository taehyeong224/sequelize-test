"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorModel_1 = require("./ErrorModel");
var Joi = require("joi");
var _ = require("underscore");
var ErrorCode_1 = require("../config/ErrorCode");
exports.errorHandle = function (e, res) {
    if (e instanceof ErrorModel_1.ErrorModel) {
        res.status(e.status).json({
            code: e.code,
            category: e.category,
            message: e.message
        });
    }
    else {
        res.status(500).json({
            code: "unknown",
            category: "unknown",
            message: "server error"
        });
    }
};
function checkValidFields(schema, requestFields) {
    var result = Joi.validate(requestFields, schema, { allowUnknown: true });
    console.log("Util > checkValidFields : ", requestFields);
    if (!_.isNull(result.error)) {
        throw new ErrorModel_1.ErrorModel(400, ErrorCode_1.errorCode.fieldValid, result.error.name, "some fields are wrong");
    }
}
exports.checkValidFields = checkValidFields;
function checkValidEntity(entity) {
    console.log("Util > checkValidEntity > entity >  ", entity);
    if (!entity) {
        throw new ErrorModel_1.ErrorModel(404, "4004", "not found", "resource not found");
    }
}
exports.checkValidEntity = checkValidEntity;
