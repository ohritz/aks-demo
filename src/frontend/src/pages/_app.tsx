import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Providers } from "@/components/providers";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}
