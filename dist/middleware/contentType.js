"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkContentType = function (req, res, next) {
    var contype = req.headers['content-type'];
    if (!contype || contype.indexOf('application/json') !== 0) {
        console.log("application/json undefined");
        return res.sendStatus(400);
    }
    next();
};
