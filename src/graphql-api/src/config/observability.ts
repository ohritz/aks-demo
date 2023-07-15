import {
  ApplicationInsightsOptions,
  TelemetryClient,
} from "applicationinsights";
import { Resource } from "@opentelemetry/resources";
import { SemanticResourceAttributes } from "@opentelemetry/semantic-conventions";
import { registerInstrumentations } from "@opentelemetry/instrumentation";
import { ExpressInstrumentation } from "@opentelemetry/instrumentation-express";
import { DataloaderInstrumentation } from "@opentelemetry/instrumentation-dataloader";
import { GraphQLInstrumentation } from "@opentelemetry/instrumentation-graphql";
import { GrpcInstrumentation } from "@opentelemetry/instrumentation-grpc";
import { getConfig } from "./appConfig";
const { observability } = getConfig();

let appInsights: TelemetryClient | undefined;
const customResource = Resource.EMPTY;
customResource.attributes[SemanticResourceAttributes.SERVICE_NAME] =
  observability.roleName;

try {
  const config: ApplicationInsightsOptions = {
    azureMonitorExporterConfig: {
      connectionString: observability.connectionString,
    },
    instrumentationOptions: {
      http: { enabled: true },
      azureSdk: { enabled: false },
      mongoDb: { enabled: false },
      mySql: { enabled: false },
      postgreSql: { enabled: false },
      redis: { enabled: false },
    },
    logInstrumentations: {
      winston: { enabled: true },
    },
    resource: customResource,
  };

  appInsights = new TelemetryClient(config);

  registerInstrumentations({
    instrumentations: [
      new ExpressInstrumentation(),
      new DataloaderInstrumentation(),
      new GraphQLInstrumentation(),
      new GrpcInstrumentation(),
    ],
  });

  console.info("Added ApplicationInsights");
} catch (err) {
  console.error(
    `ApplicationInsights setup failed, ensure environment variable 'APPLICATIONINSIGHTS_CONNECTION_STRING' has been set. Error: ${err}`
  );
}

export { appInsights };
