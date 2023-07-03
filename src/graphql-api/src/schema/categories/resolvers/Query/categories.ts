import type { QueryResolvers } from "./../../../types.generated";
import { fetchCategories } from "../../../../clients/products-api";
export const categories: NonNullable<QueryResolvers["categories"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  return fetchCategories();
};
