import type { InferGetServerSidePropsType, NextPageContext } from "next";
import { graphql } from "../../gql";
import { nodeApolloClient } from "../../client/node-apollo-client";
import { ProductDetail } from "../../features/detail-page/product-detail";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const DetailsPage: React.FC<Props> = ({ product }) => {
  return <ProductDetail product={product} />;
};

export default DetailsPage;

export const getServerSideProps = async (context: NextPageContext) => {
  const { id } = context.query;
  if (!id || typeof id !== "string") {
    return {
      notFound: true,
    };
  }
  const { data } = await nodeApolloClient.query({
    query: graphql(`
      query product($id: ID!) {
        product(id: $id) {
          id
          name
          category {
            id
            name
          }
          subCategory
          createdOn
          price {
            id
            currency
            price
          }
        }
      }
    `),
    variables: {
      id,
    },
  });

  if (!data.product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: data.product,
    },
  };
};
