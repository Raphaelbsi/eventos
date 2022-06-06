import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Ticket } from "./ticket";

@Entity()
export class Event {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'float' })
  price: number;

  @Column()
  name: string;

  @Column()
  describe: string;

  @Column()
  date: Date;

  @OneToMany(() => Ticket, ticket => ticket.event)
  public tickets!: Ticket[];

}