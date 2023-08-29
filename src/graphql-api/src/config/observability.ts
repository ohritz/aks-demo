import { AzureMonitorTraceExporter } from "@azure/monitor-opentelemetry-exporter";
import { NodeSDK } from "@opentelemetry/sdk-node";
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";

import { getConfig } from "./appConfig";
const { observability } = getConfig();

const sdk = new NodeSDK({
  traceExporter: new AzureMonitorTraceExporter({
    connectionString: observability.connectionString,
  }),
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
  serviceName: observability.roleName,
});

sdk.start();
