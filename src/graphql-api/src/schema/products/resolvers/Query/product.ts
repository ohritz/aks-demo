import type { QueryResolvers } from "./../../../types.generated.js";
import { fetchProductsById } from "../../../../clients/products-api.js";
export const product: NonNullable<QueryResolvers["product"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  return fetchProductsById(_arg.id);
};
