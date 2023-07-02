import { Logger } from "pino";
import { DataLoaders, createDataLoaders } from "./root-dataloaders";
import { BaseContext } from "@apollo/server";

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
