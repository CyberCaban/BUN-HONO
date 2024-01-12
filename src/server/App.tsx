import { Hono } from "hono";
import perm from "./components/Permutations";

const app = new Hono();

console.log("Hello via Bun!");

app.get("/", async (c) => {
  // const body = await c.req.json();
  // console.log(body);

  return c.html(
    <>
      <h1>port: {process.env.PORT}</h1>
      <button>go to page</button>
    </>
  );
});

app.route("/", perm);

export default app;

