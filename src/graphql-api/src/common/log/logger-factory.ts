import pino from "pino-http";

export const httpLogger = pino();
export const logger = httpLogger.logger;
