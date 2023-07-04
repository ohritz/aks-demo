import { isLocalEnv } from "../config/environment.js";
import { logger } from "../log/logger-factory.js";
export const logIfLocal = (msg: string, ...args: unknown[]): void => {
  if (isLocalEnv()) {
    logger.info(msg, args);
  }
};
