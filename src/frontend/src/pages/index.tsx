import Head from "next/head";
import type { InferGetServerSidePropsType } from "next";
import { Grid, GridItem } from "@chakra-ui/react";
import { graphql } from "../gql";
import { nodeApolloClient } from "../client/node-apollo-client";
import { Categories } from "../features/home-page/categories";
import { ProductTableFetcher } from "../features/home-page/product-table-fetcher";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Home: React.FC<Props> = ({
  categories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Mercurius</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid h={"100%"} w={"100%"} templateColumns={"250px 1fr"} gap={4}>
        <GridItem h={"100%"}>
          <Categories categories={categories} />
        </GridItem>
        <GridItem bg="gray.300">
          <ProductTableFetcher />
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const { data } = await nodeApolloClient.query({
    query: graphql(`
      query Categories {
        categories {
          id
          name
        }
      }
    `),
  });

  return {
    props: {
      categories: data.categories,
    },
  };
};
