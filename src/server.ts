// server.ts
import fastify from "fastify";
import { knex } from './database'
import crypto from 'node:crypto'

const app = fastify();

app.get("/hello", async () => {
  const transactions = await knex("transactions").insert({
    id: crypto.randomUUID(),
    title: "Test",
    amount: 1000,
    created_at: new Date(),
  }).returning('*')

  return transactions;
});

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running on http://localhost:3333");
});
