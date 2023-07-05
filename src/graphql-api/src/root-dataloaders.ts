import { Logger } from "pino";
import {
  createProductByCategoryLoader,
  createPriceByProductIdLoader,
} from "./schema/products/dataloaders.js";

export type DataLoaders = ReturnType<typeof createDataLoaders>;

export const createDataLoaders = (logger: Logger) => {
  return {
    productsByCategory: createProductByCategoryLoader(logger),
    priceByProductId: createPriceByProductIdLoader(logger),
  };
};
