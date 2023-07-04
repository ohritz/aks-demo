// This types environment variables so we know which are required and optional.
declare module "environment-internal" {
  export {};
  type BooleanString = "true" | "false";

  global {
    namespace NodeJS {
      interface ProcessEnv {
        PRICE_API_GRPC_URL: string;
        PRICE_API_GRPC_INSECURE?: BooleanString;

        NODE_ENV: "production" | "development" | "local";
      }
    }
  }
}
