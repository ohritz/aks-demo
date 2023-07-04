import * as grpc from "@grpc/grpc-js";
import { ChannelCredentials } from "@grpc/grpc-js";

export const createGrpcCredentials = (): ChannelCredentials =>
  grpc.credentials.createInsecure();
