import { Column, Entity } from "typeorm";
import { IsEntity } from "../base/IsEntity";

@Entity()
export class User extends IsEntity {
    @Column()
    name: string;

    @Column()
    lastname: string;
}