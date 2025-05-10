// knex.ts
import { Knex, knex as setupKnex } from 'knex'

const config = {
  client: "sqlite",
  connection: {
    filename: "./db/app.db",
  },
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
  useNullAsDefault: true,
};
export const knex = setupKnex(config)
