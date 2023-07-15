import { DataLoaders, createDataLoaders } from "./root-dataloaders";
import { BaseContext } from "@apollo/server";
import type { Logger } from "winston";

export interface AppContext extends BaseContext {
  logger: Logger;
  loaders: DataLoaders;
}

export const createContext = (logger: Logger): AppContext => {
  return {
    logger,
    loaders: createDataLoaders(logger),
  };
};
