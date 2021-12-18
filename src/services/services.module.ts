import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
const services = [
    AppService
];

@Module({
    providers: services,
    exports: services
})
export class ServicesModule {}