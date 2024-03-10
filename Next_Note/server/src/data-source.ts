import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entitys/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "postgres",
    synchronize: true, //개발환경에서만 true/ 실서버에서는 false
    logging: false,
    entities: ["src/entitys/**/*.ts"],
    migrations: [],
    subscribers: [],
})
