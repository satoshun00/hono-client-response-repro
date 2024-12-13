import { Hono } from "hono";
import app from "./index";
import { hc } from "hono/client";

const client = hc<typeof app>("http://localhost:8787");

const app2 = new Hono()
  .post("/", () => {
    return client.index.$post();
  });

export default app2;
