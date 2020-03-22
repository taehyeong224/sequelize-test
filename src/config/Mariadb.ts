import {Sequelize} from "sequelize";

export const sequelize = new Sequelize('test', 'root', '1234', {
    host: 'localhost',
    dialect: 'mariadb',
    dialectOptions: {
        useUTC: false, //for reading from database
        timezone: 'Etc/GMT0' //for writing to database
    },
    // timezone: 'Etc/GMT0' //for writing to database
});