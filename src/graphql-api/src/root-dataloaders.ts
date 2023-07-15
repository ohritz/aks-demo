import type { Logger } from "winston";
import {
  createProductByCategoryLoader,
  createPriceByProductIdLoader,
} from "./schema/products/dataloaders";

export type DataLoaders = ReturnType<typeof createDataLoaders>;

export const createDataLoaders = (logger: Logger) => {
  return {
    productsByCategory: createProductByCategoryLoader(logger),
    priceByProductId: createPriceByProductIdLoader(logger),
  };
};
