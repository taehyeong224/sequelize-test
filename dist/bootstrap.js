"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var cors = require("cors");
var inversify_express_utils_1 = require("inversify-express-utils");
var inversify_1 = require("inversify");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var types_1 = require("./constant/types");
require("./controller/UserController");
var UserService_1 = require("./service/UserService");
var UserDao_1 = require("./Dao/UserDao");
var Mariadb_1 = require("./config/Mariadb");
// load everything needed to the Container
var container = new inversify_1.Container();
container.bind(types_1.default.UserService).to(UserService_1.UserService).inRequestScope();
container.bind(types_1.default.UserDao).to(UserDao_1.UserDao).inSingletonScope();
// start the server
var server = new inversify_express_utils_1.InversifyExpressServer(container);
server.setConfig(function (app) {
    app.use(cors({ origin: true, credentials: true }));
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(function (err, req, res, next) {
        err.status = 404;
        next(err);
    });
});
Mariadb_1.sequelize.sync().then(function () {
    var serverInstance = server.build();
    serverInstance.listen(3000);
    console.log('Server started on port 3000 :)');
}).catch(function (e) {
    console.log("db error : ", e);
});
