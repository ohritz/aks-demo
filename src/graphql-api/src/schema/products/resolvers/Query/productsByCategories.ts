import type { QueryResolvers } from "./../../../types.generated.js";
import { fetchProductsByCategories } from "../../../../clients/products-api.js";
export const productsByCategories: NonNullable<
  QueryResolvers["productsByCategories"]
> = async (_parent, { categories }, _ctx) => {
  if (categories && categories.length === 0) return [];
  return fetchProductsByCategories(categories);
};
