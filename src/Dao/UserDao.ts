import { injectable } from "inversify";
import { AbstractDao } from "./base/AbstractDao";
import { User } from "../Entity/User";
import { UpdateOptions, DestroyOptions } from "sequelize/types";

@injectable()
export class UserDao extends AbstractDao<User> {

    constructor() {
        super();
    }

    public select(objectIdx: number): Promise<User> {
        throw new Error("Method not implemented.");
    }

    public findOneById(objectId: number): Promise<User> {
        return User.findByPk(objectId);
    }

    public findAll(): Promise<User[]> {
        return User.findAll();
    }

    public async insert(object: User): Promise<User> {
        return User.create(object)
    }

    public update(object: User, option: UpdateOptions): Promise<User> {
        return User.update(object, option);
    }

    public async delete(option: DestroyOptions): Promise<void> {
        await User.destroy(option)
    }
}