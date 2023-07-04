import Head from "next/head";
import { Inter } from "next/font/google";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { Grid, GridItem } from "@chakra-ui/react";
import { Categories, Category } from "../components/categories";
import { gql } from "@apollo/client";
import client from "../client/apollo-client";
const inter = Inter({ subsets: ["latin"] });

export default function Home({
  categories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
        <GridItem bg="gray.400" />
      </Grid>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  categories: Category[];
}> = async () => {
  const { data } = await client.query({
    query: gql`
      query Categories {
        categories {
          id
          name
        }
      }
    `,
  });

  return {
    props: {
      categories: data.categories,
    },
  };
};
