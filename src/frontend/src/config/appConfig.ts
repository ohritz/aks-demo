import config from "config";

export interface ObservabilityConfig {
  connectionString: string;
  roleName: string;
}

export interface DependenciesConfig {}

export interface AppConfig {
  observability: ObservabilityConfig;
  dependencies: DependenciesConfig;
}

export const getConfig: () => AppConfig = () => {
  const dependenciesConfig = config.get<DependenciesConfig>("dependencies");
  const observabilityConfig = config.get<ObservabilityConfig>("observability");

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
    dependencies: {},
  };
};
