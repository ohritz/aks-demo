import { fetchProducts } from "../../../../clients/products-api";
import type { QueryResolvers } from "./../../../types.generated";

export const products: NonNullable<QueryResolvers["products"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  return fetchProducts();
};
