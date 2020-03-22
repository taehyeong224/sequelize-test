import { UpdateOptions, DestroyOptions } from "sequelize/types";

export interface CRUDInterface<T> {
    insert(object: T): Promise<T>;
    select(objectIdx: number): Promise<T>;
    update(object: T, option: UpdateOptions): Promise<T>;
    delete(option: DestroyOptions): Promise<void>;
}