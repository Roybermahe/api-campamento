import { Module } from "@nestjs/common";
import { RepositoryModule } from "src/repository/repository.module";
import { AppService } from "./app.service";
const services = [
    AppService
];

@Module({
    imports: [RepositoryModule],
    providers: services,
    exports: services
})
export class ServicesModule {}