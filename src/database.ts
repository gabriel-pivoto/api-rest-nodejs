// knex.ts
import { Knex, knex as setupKnex } from 'knex'

export const config: Knex.Config = {
  client: "sqlite",
  connection: {
    filename: "./db/app.db",
  },
  migrations: {
    extension: 'ts',
    directory: './migrations/',
  },
  useNullAsDefault: true,
};
export const knex = setupKnex(config)
