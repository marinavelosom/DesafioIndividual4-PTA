import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class restaurant{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    adress: string

    @Column()
    food: string
}