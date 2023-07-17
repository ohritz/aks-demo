import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { ApplicationInsightsProvider } from "../../config/observability.web";

interface Props {
  children: React.ReactNode;
}

export const Providers: React.FC<Props> = ({ children }) => {
  return (
    <CacheProvider>
      <ApplicationInsightsProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </ApplicationInsightsProvider>
    </CacheProvider>
  );
};
