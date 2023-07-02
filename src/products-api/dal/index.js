const {mongo} = require("./mongodb");
const { ProductsSchema } = require("./products-schema");

function getDb() {
    return mongo;
}

async function getProductModel() {
  const connection = await mongo.connect();
  return connection.models.Product || connection.model("Product", ProductsSchema, "products");
}

const createLogConnectionFailureAndContinue =
  (logger) =>
  (e) => {
    logger.error(
      `Connection to ${e.instanceName} failed (${e.connectionString}). Allowing application to continue running.`
    );
  };

const createLogConnectionSuccess =
  (logger) =>
  (e) => {
    logger.info(`Connected to ${e.instanceName} (${e.connectionString})`);
  };

const initDatabase = async (logger) => {

  mongo.on("open", createLogConnectionSuccess(logger));
  mongo.on("reconnectFailed", createLogConnectionFailureAndContinue(logger));

  try {
    await mongo.connect();
  } catch (e) {
    if (e instanceof Error) {
      logger.error(
        `Failed to connect to Product db (${mongo.connectionString}). ${e.message}`
      );
    } else {
      logger.error(`Failed to connect to Product db (${mongo.connectionString}).`);
    }
  }
};

module.exports = { initDatabase, getDb, getProductModel };
