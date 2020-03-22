import 'reflect-metadata';
import * as cors from 'cors';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Container } from 'inversify';
import * as bodyParser from 'body-parser';
import * as cookieParser from "cookie-parser";
import TYPES from './constant/types';
import './controller/UserController';
import { Request, Response, NextFunction } from "express";
import { AbstractDao } from './Dao/base/AbstractDao';
import { UserService } from './service/UserService';
import { UserDao } from './Dao/UserDao';
import { User } from './Entity/User';
import { sequelize } from './config/Mariadb';
// load everything needed to the Container
const container = new Container();
container.bind<UserService>(TYPES.UserService).to(UserService).inRequestScope();
container.bind<AbstractDao<User>>(TYPES.UserDao).to(UserDao).inSingletonScope();

// start the server
const server: InversifyExpressServer = new InversifyExpressServer(container);

server.setConfig((app) => {
    app.use(cors({ origin: true, credentials: true }));
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
        err.status = 404;
        next(err);
    });
});
sequelize.sync().then(() => {
    const serverInstance = server.build();
    serverInstance.listen(3000);
    console.log('Server started on port 3000 :)');
}).catch((e: any) => {
    console.log("db error : ", e)
});
