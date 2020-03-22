import { CRUDInterface } from "./CRUDInterface";
import { injectable } from "inversify";
import { UpdateOptions, DestroyOptions } from "sequelize/types";

@injectable()
export abstract class AbstractDao<T> implements CRUDInterface<T> {
    constructor() {
    }
    abstract insert(object: T): Promise<T>;
    abstract select(objectIdx: number): Promise<T>;
    abstract update(object: T, optioin: UpdateOptions): Promise<T>;
    abstract delete(option: DestroyOptions): Promise<void>;
}