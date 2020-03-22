"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorModel = /** @class */ (function () {
    function ErrorModel(status, code, category, message) {
        this._status = status;
        this._code = code;
        this._category = category;
        this._message = message;
    }
    Object.defineProperty(ErrorModel.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorModel.prototype, "code", {
        get: function () {
            return this._code;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorModel.prototype, "category", {
        get: function () {
            return this._category;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorModel.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    return ErrorModel;
}());
exports.ErrorModel = ErrorModel;
