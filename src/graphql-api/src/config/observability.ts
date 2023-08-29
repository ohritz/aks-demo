import {
  AzureMonitorMetricExporter,
  AzureMonitorTraceExporter,
} from "@azure/monitor-opentelemetry-exporter";
import {
  BatchSpanProcessor,
  NodeTracerProvider,
} from "@opentelemetry/sdk-trace-node";
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";
import { Resource } from "@opentelemetry/resources";
import { registerInstrumentations } from "@opentelemetry/instrumentation";
import { SemanticResourceAttributes } from "@opentelemetry/semantic-conventions";
import {
  MeterProvider,
  PeriodicExportingMetricReader,
} from "@opentelemetry/sdk-metrics";
import { getConfig } from "./appConfig";
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
      "@opentelemetry/instrumentation-graphql": {
        ignoreTrivialResolveSpans: true,
        depth: 2,
      },
      "@opentelemetry/instrumentation-dataloader": {
        requireParentSpan: true,
      },
    }),
  ],
  meterProvider: meterProvider,
  tracerProvider: traceProvider,
});
