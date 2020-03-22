"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
var signature_1 = require("../config/signature");
var ErrorCode_1 = require("../config/ErrorCode");
exports.checkToken = function (req, res, next) {
    if (!req.headers.authorization) {
        console.log("token undefined");
        return res.status(401).json({ code: ErrorCode_1.errorCode.auth, category: ErrorCode_1.category.security, message: "authentication fail" });
    }
    try {
        var token = req.headers.authorization;
        var decoded = jwt.verify(token, signature_1.SecretKey.accessToken, {
            algorithms: ["HS256"],
            maxAge: "1h",
            issuer: "matthew409"
        });
        if (!decoded.isVerifiedEmail) {
            return res.status(401).json({ code: ErrorCode_1.errorCode.auth, category: ErrorCode_1.category.security, message: "email is not verified" });
        }
        req.userIdx = decoded.idx;
        console.log("req.userIdx > " + req.userIdx);
        next();
    }
    catch (e) {
        console.error("token > error :", e);
        if (e.message === "jwt expired") {
            return res.status(401).json({ code: ErrorCode_1.errorCode.tokenExpired, category: ErrorCode_1.category.security, message: e.message });
        }
        else {
            return res.status(401).json({ code: ErrorCode_1.errorCode.auth, category: ErrorCode_1.category.security, message: e.message });
        }
    }
};
exports.refreshToken = function (req, res, next) {
    console.log("middleware refresh token");
    if (!req.headers.authorization) {
        console.log("token undefined");
        return res.status(401).json({ code: ErrorCode_1.errorCode.auth, category: ErrorCode_1.category.security, message: "authentication fail" });
    }
    try {
        var token = req.headers.authorization;
        var decoded = jwt.verify(token, signature_1.SecretKey.refreshToken, {
            algorithms: ["HS256"],
            maxAge: "1d",
            issuer: "matthew409"
        });
        console.log("decoded : ", decoded);
        req.userIdx = decoded.idx;
        next();
    }
    catch (e) {
        console.error("refresh error : ", e.message);
        if (e.message === "jwt expired") {
            return res.status(401).json({ code: ErrorCode_1.errorCode.tokenExpired, category: ErrorCode_1.category.security, message: e.message });
        }
        else {
            return res.status(401).json({ code: ErrorCode_1.errorCode.auth, category: ErrorCode_1.category.security, message: e.message });
        }
    }
};
