import { gql } from "graphql-tag";
import { productsTypeDefs } from "./features/products/type-defs.js";

export const rootTypeDefs = gql`
  type Query
`;

export const typeDefs = [rootTypeDefs, productsTypeDefs];
