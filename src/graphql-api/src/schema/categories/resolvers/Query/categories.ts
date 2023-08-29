import type { QueryResolvers } from "./../../../types.generated";
import { fetchCategories } from "../../../../clients/products-api";
import { logger } from "../../../../config/logger";
export const categories: NonNullable<QueryResolvers["categories"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  const result = await fetchCategories();
  logger.info("categories", { result });
  return result;
};
