import type { CodegenConfig } from "@graphql-codegen/cli";
import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";
const config: CodegenConfig = {
  schema: "**/schema.graphql",
  overwrite: true,
  generates: {
    "src/schema": defineConfig({
      typesPluginsConfig: {
        contextType: "../../src/context-factory#AppContext",
      },
    }),
  },
  emitLegacyCommonJSImports: false,
  hooks: { afterAllFileWrite: ["npm run prettier"] },
};
export default config;
