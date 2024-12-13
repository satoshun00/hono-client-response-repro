import { Hono } from "hono";
import { hc } from "hono/client";

const app = new Hono().post("/", (c) => {
  return c.json({message: ""});
});

const client = hc<typeof app>("http://localhost:8787");

const app2 = new Hono()
  .post("/", () => {
    return client.index.$post();
  });
