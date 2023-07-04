import type { QueryResolvers } from "./../../../types.generated";
import { fetchProductsByCategories } from "../../../../clients/products-api";
export const productsByCategories: NonNullable<
  QueryResolvers["productsByCategories"]
> = async (_parent, _arg, _ctx) => {
  return fetchProductsByCategories(_arg.categories);
};
