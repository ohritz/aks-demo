import { Logger } from "pino";
import { createProductByCategoryLoader } from "./schema/products/dataloaders";

export type DataLoaders = ReturnType<typeof createDataLoaders>;

export const createDataLoaders = (logger: Logger) => {
  return {
    productsByCategory: createProductByCategoryLoader(logger),
  };
};
