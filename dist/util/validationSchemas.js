"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require("joi");
var testSome = Joi.object().keys({
    idx: Joi.number().required()
});
exports.validationSchemas = {
    test: {
        test: testSome
    }
};
