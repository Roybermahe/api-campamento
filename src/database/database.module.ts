import { Module } from '@nestjs/common';
import { databaseProvider } from './providers/database.provider';
import { UserProvider } from './providers/migrations.provider';
const providers = [
    ...databaseProvider,
    ...UserProvider
];
@Module({
    providers: providers,
    exports: providers
})
export class DatabaseModule {};
