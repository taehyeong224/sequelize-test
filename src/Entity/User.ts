import { Model, STRING, INTEGER } from "sequelize/types";
import {sequelize} from "../config/Mariadb"

export class User extends Model {}
User.init({
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: STRING
    }
}, {
    sequelize,
    modelName: 'user',
    timestamps: true
})