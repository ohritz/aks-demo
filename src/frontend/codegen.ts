import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:4000",
  documents: ["src/**/*.ts", "src/**/*.tsx"],
  generates: {
    "./src/gql/": {
      preset: "client",
      presetConfig: {
        avoidOptionals: true,
        useTypeImports: true,
        arrayInputCoercion: true,
        enumsAsTypes: true,
      },
    },
  },
};
export default config;
