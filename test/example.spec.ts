import { expect, beforeAll, afterAll, describe, it } from "vitest";
import { app } from "../src/app";
import request from "supertest";
import { createServer } from "node:http";
import { create } from "node:domain";

describe("Transaction routes", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });
  it("user can create a new transaction", async () => {
    const response = await request(app.server).post("/transactions").send({
      title: "New Transaction",
      amount: 5000,
      type: "credit",
    });
    expect(response.statusCode).toEqual(201);
  });
  it("should be able to list all transactions", async () => {
    const CreateTransactionResponse = await request(app.server)
      .post("/transactions")
      .send({
        title: "New Transaction",
        amount: 5000,
        type: "credit",
      });
    const cookies = CreateTransactionResponse.get("Set-Cookie") || [];
    const listTransactionsResponse = await request(app.server)
      .get("/transactions")
      .set("Cookie", cookies)
      .expect(200);

    expect(listTransactionsResponse.body.transactions).toEqual([
      expect.objectContaining({
        title: "New Transaction",
        amount: 5000,
      }),
    ]);
  });
});
