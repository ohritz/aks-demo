import config from "config";

export interface ObservabilityConfig {
  connectionString: string;
  roleName: string;
}

export interface DependenciesConfig {
  productsApiUrl: string;
  priceApiGrpcUrl: string;
}

export interface AppConfig {
  observability: ObservabilityConfig;
  dependencies: DependenciesConfig;
}

export const getConfig: () => AppConfig = () => {
  const dependenciesConfig = config.get<DependenciesConfig>("dependencies");
  const observabilityConfig = config.get<ObservabilityConfig>("observability");

  if (!dependenciesConfig.priceApiGrpcUrl) {
    console.warn(
      "dependenciesConfig.priceApiGrpcUrl is required but has not been set. Ensure environment variable 'PRODUCTS_API_URL' has been set"
    );
  }

  if (!dependenciesConfig.productsApiUrl) {
    console.warn(
      "dependenciesConfig.productsApiUrl is required but has not been set. Ensure environment variable 'PRICE_API_GRPC_URL' has been set"
    );
  }

  if (!observabilityConfig.connectionString) {
    console.warn(
      "observability.connectionString has not been set. Ensure environment variable 'APPLICATIONINSIGHTS_CONNECTION_STRING' has been set"
    );
  }

  return {
    observability: {
      connectionString: observabilityConfig.connectionString,
      roleName: observabilityConfig.roleName,
    },
    dependencies: {
      productsApiUrl: dependenciesConfig.productsApiUrl,
      priceApiGrpcUrl: dependenciesConfig.priceApiGrpcUrl,
    },
  };
};
