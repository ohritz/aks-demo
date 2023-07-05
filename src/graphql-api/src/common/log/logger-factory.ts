import { pinoHttp } from "pino-http";

export const httpLogger = pinoHttp();
export const logger = httpLogger.logger;
