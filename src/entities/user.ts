import { Entity, Column, CreateDateColumn, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';


@Entity('users')
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @CreateDateColumn()
  create_at: Date;

  constructor() {
    if (!this.id) this.id = uuid()
  }
}