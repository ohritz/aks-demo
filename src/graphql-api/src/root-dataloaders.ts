import { Logger } from "pino";

export interface DataLoaders {}

export const createDataLoaders = (logger: Logger): DataLoaders => {
  return {};
};
