const dotenv = require("dotenv");

exports.getConfig = () => {
  // Load any ENV vars from local .env file
  if (process.env.NODE_ENV !== "production") {
    dotenv.config();
  }

  const config = require("config");
  const databaseConfig = config.get("database");
  const observabilityConfig = config.get("observability");

  if (!databaseConfig.connectionString) {
    console.warn(
      "database.connectionString is required but has not been set. Ensure environment variable 'AZURE_COSMOS_CONNECTION_STRING' has been set"
    );
  }

  if (!observabilityConfig.connectionString) {
    console.warn(
      "observability.connectionString is required but has not been set. Ensure environment variable 'APPLICATIONINSIGHTS_CONNECTION_STRING' has been set"
    );
  }

  return {
    observability: {
      connectionString: observabilityConfig.connectionString,
      roleName: observabilityConfig.roleName,
    },
    database: {
      connectionString: databaseConfig.connectionString,
      databaseName: databaseConfig.databaseName,
    },
  };
};
