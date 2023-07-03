import DataLoader from "dataloader";
import { Logger } from "pino";
import { ProductMapper } from "./schema.mappers";
import { fetchProductsByCategories } from "../../clients/products-api";

export type ProductByCategoryLoader = DataLoader<string, ProductMapper[]>;

export const createProductByCategoryLoader = (
  logger: Logger
): ProductByCategoryLoader =>
  new DataLoader<string, ProductMapper[]>(async (categoryIds) => {
    const products = await fetchProductsByCategories(categoryIds);
    return categoryIds.map((categoryId) =>
      products.filter((product) => product.category === categoryId)
    );
  });
