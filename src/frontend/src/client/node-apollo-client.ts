import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import nodeFetch, { RequestInit, Response } from "node-fetch";

const customFetch = (
  uri: RequestInfo | URL,
  options?: RequestInit
): Promise<Response> => {
  const { operationName } = options?.body
    ? JSON.parse(options.body.toString())
    : "";
  return nodeFetch(`${uri}?opname=${operationName}`, options);
};

const link = new HttpLink({
  fetch: customFetch as any,
  uri: process.env.NEXT_PUBLIC_SERVER_GRAPHQL_API_URL,
});

export const nodeApolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  connectToDevTools: true,
  link,
});
