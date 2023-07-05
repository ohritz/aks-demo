import { ApolloClient, InMemoryCache } from "@apollo/client";

export const browserClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export const serverClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_SERVER_GRAPHQL_API_URL,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
