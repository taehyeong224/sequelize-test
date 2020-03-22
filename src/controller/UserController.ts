import { controller, httpDelete, httpGet, httpPost, httpPut } from 'inversify-express-utils';
import { inject } from 'inversify';
import { UserService } from '../service/UserService';
import * as express from 'express';
import TYPES from '../constant/types';
import { errorHandle } from "../util/util";
// import { checkContentType } from "../middleware/contentType";
import { checkToken } from "../middleware/token";
import { User } from '../Entity/User';

@controller('/user')
export class TestController {

    constructor(@inject(TYPES.UserService) private userService: UserService) {}

    @httpGet('/')
    public async getall(request: express.Request, response: express.Response) {
        try {
            const users: User[] = await this.userService.getAll();
            response.status(200).json(users);
        } catch (e) {
            errorHandle(e, response)
        }
    }

    @httpGet('/:id')
    public async someGet(request: express.Request, response: express.Response) {
        try {
            const user: User = await this.userService.getTestByIdx(request.params.id);
            response.status(200).json(user);
        } catch (e) {
            errorHandle(e, response)
        }
    }

    @httpPost('/')
    public async somePost(request: express.Request, response: express.Response) {
        try {
            response.status(201).json({ msg: "success" });
        } catch (e) {
            errorHandle(e, response)
        }
    }

    @httpPut('/', checkToken)
    public async somePut(request: any, response: express.Response) {
        try {
            response.status(200).json({ msg: "success" });
        } catch (e) {
            console.log("error : ", e);
            errorHandle(e, response)
        }
    }

    @httpDelete('/:id', checkToken)
    public async someDelete(request: express.Request, response: express.Response) {
        try {
            response.status(204).json({});
        } catch (e) {
            errorHandle(e, response)
        }
    }
}
