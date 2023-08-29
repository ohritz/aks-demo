const {
  AzureMonitorMetricExporter,
  AzureMonitorTraceExporter,
} = require("@azure/monitor-opentelemetry-exporter");
const {
  BatchSpanProcessor,
  NodeTracerProvider,
} = require("@opentelemetry/sdk-trace-node");
const {
  getNodeAutoInstrumentations,
} = require("@opentelemetry/auto-instrumentations-node");
const { Resource } = require("@opentelemetry/resources");
const { registerInstrumentations } = require("@opentelemetry/instrumentation");
const {
  SemanticResourceAttributes,
} = require("@opentelemetry/semantic-conventions");
const {
  MeterProvider,
  PeriodicExportingMetricReader,
} = require("@opentelemetry/sdk-metrics");

const { getConfig } = require("./index");
const { observability } = getConfig();

const roleNameResource = new Resource({
  [SemanticResourceAttributes.SERVICE_NAME]: observability.roleName,
});

const traceProvider = new NodeTracerProvider({
  resource: roleNameResource,
});

const meterProvider = new MeterProvider({
  resource: roleNameResource,
});

traceProvider.register();

const metricExporter = new AzureMonitorMetricExporter({
  connectionString: observability.connectionString,
});

const traceExporter = new AzureMonitorTraceExporter({
  connectionString: observability.connectionString,
});

const metricReader = new PeriodicExportingMetricReader({
  exporter: metricExporter,
});

traceProvider.addSpanProcessor(new BatchSpanProcessor(traceExporter));
meterProvider.addMetricReader(metricReader);

registerInstrumentations({
  instrumentations: [
    getNodeAutoInstrumentations({
      "@opentelemetry/instrumentation-winston": {
        logHook: (span, record) => {
          record["resource.service.name"] = observability.roleName;
        },
      },
      "@opentelemetry/instrumentation-mongoose": {
        requireParentSpan: true,
      },
    }),
  ],
  meterProvider: meterProvider,
  tracerProvider: traceProvider,
});
