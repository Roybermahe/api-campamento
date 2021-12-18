import { Column } from "typeorm";

export class IsDate {
    @Column({
        precision: 3,
        type: 'timestamp', 
        default: () => 'CURRENT_TIMESTAMP(3)'
    })
    created?: Date;

    @Column({
        precision: 3, 
        type: 'timestamp', 
        onUpdate: 'CURRENT_TIMESTAMP(3)', 
        default: () => 'CURRENT_TIMESTAMP(3)' 
    })
    updated?: Date;
}