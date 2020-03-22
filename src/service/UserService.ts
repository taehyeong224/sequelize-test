import { inject, injectable } from 'inversify';
import TYPES from "../constant/types";
import { UserDao } from '../Dao/UserDao';
import { User } from '../Entity/User';

@injectable()
export class UserService {
    @inject(TYPES.UserDao) private userDao: UserDao;

    public async getTestByIdx(idx: number): Promise<User> {
        return this.userDao.findOneById(idx);
    }

    public getAll(): PromiseLike<User[]> {
        return this.userDao.findAll();
    }

}
