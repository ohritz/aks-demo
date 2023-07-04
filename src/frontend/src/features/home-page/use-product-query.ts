import { useQuery } from "@apollo/client";
import { graphql } from "../../gql";
import { ProductsByCategoriesQuery } from "../../gql/graphql";
const query = graphql(`
  query ProductsByCategories($categories: [String!]!) {
    productsByCategories(categories: $categories) {
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
`);

export const useProductByCategoriesQuery = (categories: string[]) => {
  const { data, loading, error } = useQuery(query, {
    variables: { categories },
  });

  return { data: data?.productsByCategories, loading, error };
};

export type ProductsByCategories =
  ProductsByCategoriesQuery["productsByCategories"];
