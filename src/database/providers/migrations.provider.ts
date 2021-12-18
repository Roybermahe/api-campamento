import { Connection } from "typeorm";
import { User } from "../entitys/user.entity";

const ConnectionDB = 'DATABASE_CONNECTION';

export const UserProvider = [
    {
        provide: User.name,
        useFactory: (connection: Connection) => connection.getRepository(User),
        inject: [ConnectionDB]
    },
];