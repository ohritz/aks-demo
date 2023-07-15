import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { typeDefs } from "./schema/typeDefs.generated";
import { resolvers } from "./schema/resolvers.generated";
import { AppContext, createContext } from "./context-factory";
import { logger } from "./config/logger";
import expressWinston from "express-winston";

export const startServer = async () => {
  // Required logic for integrating with Express
  const app = express();
  // Our httpServer handles incoming requests to our Express app.
  // Below, we tell Apollo Server to "drain" this httpServer,
  // enabling our servers to shut down gracefully.
  const httpServer = http.createServer(app);

  app.use(expressWinston.logger({ winstonInstance: logger }));

  // Same ApolloServer initialization as before, plus the drain plugin
  // for our httpServer.
  const server = new ApolloServer<AppContext>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    logger: logger,
  });
  // Ensure we wait for our server to start
  await server.start();

  // Set up our Express middleware to handle CORS, body parsing,
  // and our expressMiddleware function.
  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    // expressMiddleware accepts the same arguments:
    // an Apollo Server instance and optional configuration options
    expressMiddleware(server, {
      context: async () => createContext(logger),
    })
  );
  app.use(expressWinston.errorLogger({ winstonInstance: logger }));

  const port = process.env.PORT || 4000;
  const host = process.env.HOST || "localhost";
  // Modified server startup
  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));

  logger.info(`🚀 Server ready at http://${host}:${port}/graphql`);
};
