import type { QueryResolvers } from "./../../../types.generated";
import { fetchProducts } from "../../../../clients/products-api";

export const products: NonNullable<QueryResolvers["products"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  return fetchProducts();
};
