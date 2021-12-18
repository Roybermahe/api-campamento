import { Module } from "@nestjs/common";
import { ServicesModule } from "src/services/services.module";
import { AppController } from "./app.controller";
const controller = [
    AppController
];

@Module({
    imports: [
        ServicesModule
    ],
    controllers: controller,
})
export class ControllerModule {}