import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { pinoHttp } from "pino-http";
import { typeDefs } from "./schema/typeDefs.generated.js";
import { resolvers } from "./schema/resolvers.generated.js";
import { AppContext, createContext } from "./context-factory.js";

// Required logic for integrating with Express
const app = express();
// Our httpServer handles incoming requests to our Express app.
// Below, we tell Apollo Server to "drain" this httpServer,
// enabling our servers to shut down gracefully.
const httpServer = http.createServer(app);
const httpLogger = pinoHttp();

app.use(httpLogger);

// Same ApolloServer initialization as before, plus the drain plugin
// for our httpServer.
const server = new ApolloServer<AppContext>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  logger: httpLogger.logger,
});
// Ensure we wait for our server to start
await server.start();

// Set up our Express middleware to handle CORS, body parsing,
// and our expressMiddleware function.
app.use(
  "/",
  cors<cors.CorsRequest>(),
  bodyParser.json(),
  // expressMiddleware accepts the same arguments:
  // an Apollo Server instance and optional configuration options
  expressMiddleware(server, {
    context: async () => createContext(httpLogger.logger),
  })
);

const port = process.env.PORT || 4000;
const host = process.env.HOST || "localhost";
// Modified server startup
await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
httpLogger.logger.info(`🚀 Server ready at http://${host}:${port}/`);
