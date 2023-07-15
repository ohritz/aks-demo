"use strict";
require("./app-config/observability");
const { logger } = require("./app-config/logger");
require("make-promises-safe");
const { initDatabase } = require("./dal");
const Hapi = require("@hapi/hapi");
const Qs = require("qs");
const { routes } = require("./routes");
const { goodWinston } = require("hapi-good-winston");
const { getConfig } = require("./app-config");

const config = getConfig();

const goodWinstonOptions = {
  levels: {
    response: "debug",
    error: "info",
  },
};

const options = {
  ops: {
    interval: 1000,
  },
  reporters: {
    // Simple and straight forward usage
    winston: [goodWinston(logger)],
    // Adding some customization configuration
    winstonWithLogLevels: [goodWinston(logger, goodWinstonOptions)],
    // This example simply illustrates auto loading and instantiation made by good
    winston2: [
      {
        module: "hapi-good-winston",
        name: "goodWinston",
        args: [logger, goodWinstonOptions],
      },
    ],
  },
};

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

  await server.register({ plugin: require("good"), options });
  await initDatabase(config.database, logger);

  await server.start();
  logger.info(`Server running at: ${server.info.uri}`);

  return server;
}

start().catch((err) => {
  logger.error(err);
  process.exit(1);
});
