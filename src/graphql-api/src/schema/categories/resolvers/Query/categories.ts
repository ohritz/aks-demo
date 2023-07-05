import type { QueryResolvers } from "./../../../types.generated.js";
import { fetchCategories } from "../../../../clients/products-api.js";
export const categories: NonNullable<QueryResolvers["categories"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  return fetchCategories();
};
