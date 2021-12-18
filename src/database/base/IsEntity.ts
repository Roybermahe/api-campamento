import { PrimaryGeneratedColumn } from "typeorm";
import { IsDate } from "./IsDate";

export class IsEntity extends IsDate {
    @PrimaryGeneratedColumn()
    Id?: number;
}