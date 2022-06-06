import "reflect-metadata"
import { DataSource } from "typeorm"
import { Event } from "../entity/event"
import { Ticket } from "../entity/ticket"
import { User } from "../entity/user"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "db",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "eventos",
    synchronize: true,
    logging: true,
    entities: [User, Event, Ticket],
    subscribers: [],
    migrations: [],
})
// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))