import type { QueryResolvers } from "./../../../types.generated";
import { fetchProductsById } from "../../../../clients/products-api";
export const product: NonNullable<QueryResolvers["product"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  return fetchProductsById(_arg.id);
};
