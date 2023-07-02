import { gql } from "graphql-tag";

export const productsTypeDefs = gql`
  extend type Query {
    products: [Product]
  }

  type Product {
    id: ID!
    name: String!
    category: String!
    subCategory: String
    createdOn: String!
  }
`;
