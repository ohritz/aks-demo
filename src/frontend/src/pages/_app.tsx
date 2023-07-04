import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "@/client/apollo-client";
import { Providers } from "@/features/global/providers";
import Layout from "@/features/global/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </Providers>
  );
}
