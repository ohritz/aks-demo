"use strict";

require("make-promises-safe");
const { initDatabase } = require("./dal");
const Hapi = require("@hapi/hapi");
const Qs = require("qs");
const { routes } = require("./routes");
const Pino = require("hapi-pino");

async function start() {
  // Create a server with a host and port
  const server = Hapi.server({
    host: "0.0.0.0",
    port: process.env.PORT || 3020,
    query: {
      parser: (query) => Qs.parse(query),
    },
  });

  // Add the routes
  routes.forEach((route) => {
    server.route(route);
  });

  await server.register(Pino);
  await initDatabase(server.logger);

  await server.start();

  return server;
}

start().catch((err) => {
  console.log(err);
  process.exit(1);
});
