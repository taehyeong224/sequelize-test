"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize('test', 'root', '1234', {
    host: 'localhost',
    dialect: 'mariadb',
    dialectOptions: {
        useUTC: false,
        timezone: 'Etc/GMT0' //for writing to database
    },
});
