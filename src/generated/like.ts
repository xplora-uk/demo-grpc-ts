/* eslint-disable */
import { ChannelCredentials, Client, makeGenericClientConstructor, Metadata } from "@grpc/grpc-js";
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "like";

export interface LikeCampaignRequest {
  userId: string;
  date: string;
  campaignId: string;
}

export interface LikeCampaignResponse {
  error: string;
  success: boolean;
}

function createBaseLikeCampaignRequest(): LikeCampaignRequest {
  return { userId: "", date: "", campaignId: "" };
}

export const LikeCampaignRequest = {
  encode(message: LikeCampaignRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.date !== "") {
      writer.uint32(18).string(message.date);
    }
    if (message.campaignId !== "") {
      writer.uint32(26).string(message.campaignId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LikeCampaignRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLikeCampaignRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.date = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.campaignId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LikeCampaignRequest {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      date: isSet(object.date) ? globalThis.String(object.date) : "",
      campaignId: isSet(object.campaignId) ? globalThis.String(object.campaignId) : "",
    };
  },

  toJSON(message: LikeCampaignRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.date !== "") {
      obj.date = message.date;
    }
    if (message.campaignId !== "") {
      obj.campaignId = message.campaignId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LikeCampaignRequest>, I>>(base?: I): LikeCampaignRequest {
    return LikeCampaignRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LikeCampaignRequest>, I>>(object: I): LikeCampaignRequest {
    const message = createBaseLikeCampaignRequest();
    message.userId = object.userId ?? "";
    message.date = object.date ?? "";
    message.campaignId = object.campaignId ?? "";
    return message;
  },
};

function createBaseLikeCampaignResponse(): LikeCampaignResponse {
  return { error: "", success: false };
}

export const LikeCampaignResponse = {
  encode(message: LikeCampaignResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.error !== "") {
      writer.uint32(10).string(message.error);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LikeCampaignResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLikeCampaignResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.error = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.success = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LikeCampaignResponse {
    return {
      error: isSet(object.error) ? globalThis.String(object.error) : "",
      success: isSet(object.success) ? globalThis.Boolean(object.success) : false,
    };
  },

  toJSON(message: LikeCampaignResponse): unknown {
    const obj: any = {};
    if (message.error !== "") {
      obj.error = message.error;
    }
    if (message.success === true) {
      obj.success = message.success;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LikeCampaignResponse>, I>>(base?: I): LikeCampaignResponse {
    return LikeCampaignResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LikeCampaignResponse>, I>>(object: I): LikeCampaignResponse {
    const message = createBaseLikeCampaignResponse();
    message.error = object.error ?? "";
    message.success = object.success ?? false;
    return message;
  },
};

export type LikeServiceService = typeof LikeServiceService;
export const LikeServiceService = {
  likeCampaign: {
    path: "/like.LikeService/likeCampaign",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LikeCampaignRequest) => Buffer.from(LikeCampaignRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LikeCampaignRequest.decode(value),
    responseSerialize: (value: LikeCampaignResponse) => Buffer.from(LikeCampaignResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LikeCampaignResponse.decode(value),
  },
} as const;

export interface LikeServiceServer extends UntypedServiceImplementation {
  likeCampaign: handleUnaryCall<LikeCampaignRequest, LikeCampaignResponse>;
}

export interface LikeServiceClient extends Client {
  likeCampaign(
    request: LikeCampaignRequest,
    callback: (error: ServiceError | null, response: LikeCampaignResponse) => void,
  ): ClientUnaryCall;
  likeCampaign(
    request: LikeCampaignRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: LikeCampaignResponse) => void,
  ): ClientUnaryCall;
  likeCampaign(
    request: LikeCampaignRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: LikeCampaignResponse) => void,
  ): ClientUnaryCall;
}

export const LikeServiceClient = makeGenericClientConstructor(LikeServiceService, "like.LikeService") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): LikeServiceClient;
  service: typeof LikeServiceService;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
