import chalk from "chalk";
import { logger } from "../../config/logger";
const localEnv = process.env.NODE_ENV === "local";

if (localEnv) {
  logger.info(chalk.green("Using local environment."));
}

export const isLocalEnv = (): boolean => localEnv;
