import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Ticket } from "./ticket";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @OneToMany(() => Ticket, ticket => ticket.user)
    public tickets!: Ticket[];

}
