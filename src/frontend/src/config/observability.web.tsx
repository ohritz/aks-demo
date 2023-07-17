import React, { FC, useEffect } from "react";
import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import { ReactPlugin } from "@microsoft/applicationinsights-react-js";
import { createBrowserHistory } from "history";

interface Props {
  children: React.ReactNode;
}

export const ApplicationInsightsProvider: FC<Props> = ({ children }) => {
  useEffect(() => {
    const browserHistory = createBrowserHistory({});
    var reactPlugin = new ReactPlugin();

    const appInsights = new ApplicationInsights({
      config: {
        connectionString:
          process.env.NEXT_PUBLIC_APPLICATIONINSIGHTS_CONNECTION_STRING,
        /* ...Other Configuration Options... */
        extensions: [reactPlugin as any],

        // Add the Click Analytics plug-in.
        // extensions: [reactPlugin, clickPluginInstance],
        extensionConfig: {
          [reactPlugin.identifier]: { history: browserHistory },
          // Add the Click Analytics plug-in.
          // [clickPluginInstance.identifier]: clickPluginConfig
        },
        enableAutoRouteTracking: true,
      },
    });
    appInsights.addTelemetryInitializer((envelope) => {
      if (envelope && envelope.tags) {
        envelope.tags["ai.cloud.role"] = "web-frontend";
      }
    });
    appInsights.loadAppInsights();
    appInsights.trackPageView();
  }, []);
  return <>{children}</>;
};
