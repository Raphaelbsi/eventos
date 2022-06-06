import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Event } from "./event";
import { User } from "./user";


@Entity()
export class Ticket {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Event, event => event.tickets)
  public event!: Event;

  @ManyToOne(() => User, user => user.tickets)
  public user!: User
}