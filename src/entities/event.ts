import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToMany, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';


@Entity('events')
export class Event {
  @PrimaryColumn()
  id: string;

  @Column()
  date: Date;

  @Column()
  price: number;

  @Column()
  local: string;

  @ManyToMany(() => Event)
  @JoinColumn({ name: 'id' })
  user: string

  constructor() {
    if (!this.id) this.id = uuid()
  }
}