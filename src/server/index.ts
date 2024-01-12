import app from "./App";

Bun.serve({
  fetch: app.fetch,
  port: process.env.PORT || 3030,
});

