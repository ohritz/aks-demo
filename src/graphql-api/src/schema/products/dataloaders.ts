import DataLoader from "dataloader";
import type { Logger } from "winston";
import { ProductMapper } from "./schema.mappers";
import { fetchProductsByCategories } from "../../clients/products-api";
import { Price } from "../types.generated";
import { getPrices } from "../../clients/grpc-price-api-client";

export type ProductByCategoryLoader = DataLoader<string, ProductMapper[]>;
export type PriceByProductIdLoader = DataLoader<string, Price>;

export const createProductByCategoryLoader = (
  logger: Logger
): ProductByCategoryLoader =>
  new DataLoader<string, ProductMapper[]>(async (categoryIds) => {
    logger.info("fetching products for {categoryIds}", categoryIds);
    const products = await fetchProductsByCategories(categoryIds);
    return categoryIds.map((categoryId) =>
      products.filter((product) => product.category === categoryId)
    );
  });

export const createPriceByProductIdLoader = (
  logger: Logger
): PriceByProductIdLoader =>
  new DataLoader<string, Price>(async (productIds) => {
    const prices = await getPrices(productIds);
    logger.info("fetching prices for {productIds}", productIds);
    return productIds
      .map((productId) => prices.find((price) => price.id === productId))
      .map((price) => ({
        currency: price?.currency ?? "",
        price: price?.price ?? 0,
        id: price?.id ?? "",
      }));
  });
