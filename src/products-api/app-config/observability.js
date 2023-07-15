const {
  ApplicationInsightsClient,
  ApplicationInsightsConfig,
} = require("applicationinsights");
const { Resource } = require("@opentelemetry/resources");
const {
  SemanticResourceAttributes,
} = require("@opentelemetry/semantic-conventions");
const {
  WinstonInstrumentation,
} = require("@opentelemetry/instrumentation-winston");
const {
  MongooseInstrumentation,
} = require("@opentelemetry/instrumentation-mongoose");
const { HapiInstrumentation } = require("@opentelemetry/instrumentation-hapi");
const { getConfig } = require("./index");

const { observability } = getConfig();

try {
  const config = new ApplicationInsightsConfig();
  config.azureMonitorExporterConfig.connectionString =
    observability.connectionString;

  config.instrumentations = {
    http: { enabled: true },
    azureSdk: { enabled: false },
    mongoDb: { enabled: true },
    mySql: { enabled: false },
    postgreSql: { enabled: false },
    redis: { enabled: false },
  };

  const customResource = Resource.EMPTY;
  customResource.attributes[SemanticResourceAttributes.SERVICE_NAME] =
    observability.roleName;
  config.resource = customResource;
  const appInsights = new ApplicationInsightsClient(config);

  const traceHandler = appInsights.getTraceHandler();
  traceHandler.addInstrumentation(
    new WinstonInstrumentation({
      logHook: (span, record) => {
        record["resource.service.name"] =
          config.resource.attributes["service.name"];
      },
    })
  );

  traceHandler.addInstrumentation(new MongooseInstrumentation());
  traceHandler.addInstrumentation(new HapiInstrumentation());

  console.info("Added ApplicationInsights");
} catch (err) {
  console.error(
    `ApplicationInsights setup failed, ensure environment variable 'APPLICATIONINSIGHTS_CONNECTION_STRING' has been set. Error: ${err}`
  );
}
