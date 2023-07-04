import type { QueryResolvers } from "./../../../types.generated";
import { fetchProductsByCategories } from "../../../../clients/products-api";
export const productsByCategories: NonNullable<
  QueryResolvers["productsByCategories"]
> = async (_parent, { categories }, _ctx) => {
  if (categories && categories.length === 0) return [];
  return fetchProductsByCategories(categories);
};
