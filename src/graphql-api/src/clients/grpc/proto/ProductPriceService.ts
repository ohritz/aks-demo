/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal.js";

export const protobufPackage = "PriceApi.Schema";

/** The request message containing the user's name. */
export interface PricesRequest {
  ids: string[];
}

export interface PriceRequest {
  id: string;
}

/** The response message containing the greetings. */
export interface PricesReply {
  priceDetails: PriceDetail[];
}

export interface PriceReply {
  priceDetail: PriceDetail | undefined;
}

export interface PriceDetail {
  id: string;
  currency: string;
  price: number;
}

function createBasePricesRequest(): PricesRequest {
  return { ids: [] };
}

export const PricesRequest = {
  encode(
    message: PricesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.ids) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PricesRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePricesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ids.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PricesRequest {
    return {
      ids: Array.isArray(object?.ids)
        ? object.ids.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: PricesRequest): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map((e) => e);
    } else {
      obj.ids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PricesRequest>, I>>(
    base?: I
  ): PricesRequest {
    return PricesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PricesRequest>, I>>(
    object: I
  ): PricesRequest {
    const message = createBasePricesRequest();
    message.ids = object.ids?.map((e) => e) || [];
    return message;
  },
};

function createBasePriceRequest(): PriceRequest {
  return { id: "" };
}

export const PriceRequest = {
  encode(
    message: PriceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PriceRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PriceRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: PriceRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create<I extends Exact<DeepPartial<PriceRequest>, I>>(
    base?: I
  ): PriceRequest {
    return PriceRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PriceRequest>, I>>(
    object: I
  ): PriceRequest {
    const message = createBasePriceRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBasePricesReply(): PricesReply {
  return { priceDetails: [] };
}

export const PricesReply = {
  encode(
    message: PricesReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.priceDetails) {
      PriceDetail.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PricesReply {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePricesReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.priceDetails.push(
            PriceDetail.decode(reader, reader.uint32())
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PricesReply {
    return {
      priceDetails: Array.isArray(object?.priceDetails)
        ? object.priceDetails.map((e: any) => PriceDetail.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PricesReply): unknown {
    const obj: any = {};
    if (message.priceDetails) {
      obj.priceDetails = message.priceDetails.map((e) =>
        e ? PriceDetail.toJSON(e) : undefined
      );
    } else {
      obj.priceDetails = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PricesReply>, I>>(base?: I): PricesReply {
    return PricesReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PricesReply>, I>>(
    object: I
  ): PricesReply {
    const message = createBasePricesReply();
    message.priceDetails =
      object.priceDetails?.map((e) => PriceDetail.fromPartial(e)) || [];
    return message;
  },
};

function createBasePriceReply(): PriceReply {
  return { priceDetail: undefined };
}

export const PriceReply = {
  encode(
    message: PriceReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.priceDetail !== undefined) {
      PriceDetail.encode(
        message.priceDetail,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PriceReply {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.priceDetail = PriceDetail.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PriceReply {
    return {
      priceDetail: isSet(object.priceDetail)
        ? PriceDetail.fromJSON(object.priceDetail)
        : undefined,
    };
  },

  toJSON(message: PriceReply): unknown {
    const obj: any = {};
    message.priceDetail !== undefined &&
      (obj.priceDetail = message.priceDetail
        ? PriceDetail.toJSON(message.priceDetail)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<PriceReply>, I>>(base?: I): PriceReply {
    return PriceReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PriceReply>, I>>(
    object: I
  ): PriceReply {
    const message = createBasePriceReply();
    message.priceDetail =
      object.priceDetail !== undefined && object.priceDetail !== null
        ? PriceDetail.fromPartial(object.priceDetail)
        : undefined;
    return message;
  },
};

function createBasePriceDetail(): PriceDetail {
  return { id: "", currency: "", price: 0 };
}

export const PriceDetail = {
  encode(
    message: PriceDetail,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.currency !== "") {
      writer.uint32(18).string(message.currency);
    }
    if (message.price !== 0) {
      writer.uint32(29).float(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PriceDetail {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceDetail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.currency = reader.string();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.price = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PriceDetail {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      currency: isSet(object.currency) ? String(object.currency) : "",
      price: isSet(object.price) ? Number(object.price) : 0,
    };
  },

  toJSON(message: PriceDetail): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.currency !== undefined && (obj.currency = message.currency);
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },

  create<I extends Exact<DeepPartial<PriceDetail>, I>>(base?: I): PriceDetail {
    return PriceDetail.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PriceDetail>, I>>(
    object: I
  ): PriceDetail {
    const message = createBasePriceDetail();
    message.id = object.id ?? "";
    message.currency = object.currency ?? "";
    message.price = object.price ?? 0;
    return message;
  },
};

/** The greeting service definition. */
export type ProductPriceServiceService = typeof ProductPriceServiceService;
export const ProductPriceServiceService = {
  /** Sends a greeting */
  getPrices: {
    path: "/PriceApi.Schema.ProductPriceService/GetPrices",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PricesRequest) =>
      Buffer.from(PricesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PricesRequest.decode(value),
    responseSerialize: (value: PricesReply) =>
      Buffer.from(PricesReply.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PricesReply.decode(value),
  },
  getPrice: {
    path: "/PriceApi.Schema.ProductPriceService/GetPrice",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PriceRequest) =>
      Buffer.from(PriceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PriceRequest.decode(value),
    responseSerialize: (value: PriceReply) =>
      Buffer.from(PriceReply.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PriceReply.decode(value),
  },
} as const;

export interface ProductPriceServiceServer
  extends UntypedServiceImplementation {
  /** Sends a greeting */
  getPrices: handleUnaryCall<PricesRequest, PricesReply>;
  getPrice: handleUnaryCall<PriceRequest, PriceReply>;
}

export interface ProductPriceServiceClient extends Client {
  /** Sends a greeting */
  getPrices(
    request: PricesRequest,
    callback: (error: ServiceError | null, response: PricesReply) => void
  ): ClientUnaryCall;
  getPrices(
    request: PricesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PricesReply) => void
  ): ClientUnaryCall;
  getPrices(
    request: PricesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PricesReply) => void
  ): ClientUnaryCall;
  getPrice(
    request: PriceRequest,
    callback: (error: ServiceError | null, response: PriceReply) => void
  ): ClientUnaryCall;
  getPrice(
    request: PriceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PriceReply) => void
  ): ClientUnaryCall;
  getPrice(
    request: PriceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PriceReply) => void
  ): ClientUnaryCall;
}

export const ProductPriceServiceClient = makeGenericClientConstructor(
  ProductPriceServiceService,
  "PriceApi.Schema.ProductPriceService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>
  ): ProductPriceServiceClient;
  service: typeof ProductPriceServiceService;
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
