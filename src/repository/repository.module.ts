import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { UserRepository } from "./repos/user.repository";
const repositories = [
    UserRepository
];

@Module({
    imports: [DatabaseModule],
    providers: repositories,
    exports: repositories
})
export class RepositoryModule {}