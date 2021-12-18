import { createConnection } from "typeorm";

const ConnectionDB = 'DATABASE_CONNECTION';

export const databaseProvider = [
    {
        provide: ConnectionDB,
        useFactory: async () =>
        await createConnection({
            type: 'mariadb',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'camp_db',
            entities: ['./dist/**/**/*.entity{.js,.ts}'],
            synchronize: true // OJO: solo usar en desarollo no en producción
        }),
    },
];