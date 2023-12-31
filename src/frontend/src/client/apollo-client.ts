import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const customFetch = (
  uri: RequestInfo | URL,
  options?: RequestInit
): Promise<Response> => {
  const { operationName } = options?.body
    ? JSON.parse(options.body.toString())
    : "";
  return fetch(`${uri}?opname=${operationName}`, options);
};

const link = new HttpLink({
  fetch: customFetch,
  uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
});

export const browserClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
