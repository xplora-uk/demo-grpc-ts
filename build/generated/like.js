"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeServiceClient = exports.LikeServiceService = exports.LikeCampaignResponse = exports.LikeCampaignRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "like";
function createBaseLikeCampaignRequest() {
    return { userId: "", campaignId: "" };
}
exports.LikeCampaignRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.campaignId !== "") {
            writer.uint32(18).string(message.campaignId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
    fromJSON(object) {
        return {
            userId: isSet(object.userId) ? String(object.userId) : "",
            campaignId: isSet(object.campaignId) ? String(object.campaignId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.campaignId !== undefined && (obj.campaignId = message.campaignId);
        return obj;
    },
    create(base) {
        return exports.LikeCampaignRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLikeCampaignRequest();
        message.userId = object.userId ?? "";
        message.campaignId = object.campaignId ?? "";
        return message;
    },
};
function createBaseLikeCampaignResponse() {
    return { error: "", success: false };
}
exports.LikeCampaignResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.error !== "") {
            writer.uint32(10).string(message.error);
        }
        if (message.success === true) {
            writer.uint32(16).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
    fromJSON(object) {
        return {
            error: isSet(object.error) ? String(object.error) : "",
            success: isSet(object.success) ? Boolean(object.success) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.error !== undefined && (obj.error = message.error);
        message.success !== undefined && (obj.success = message.success);
        return obj;
    },
    create(base) {
        return exports.LikeCampaignResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLikeCampaignResponse();
        message.error = object.error ?? "";
        message.success = object.success ?? false;
        return message;
    },
};
exports.LikeServiceService = {
    likeCampaign: {
        path: "/like.LikeService/likeCampaign",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.LikeCampaignRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.LikeCampaignRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.LikeCampaignResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.LikeCampaignResponse.decode(value),
    },
};
exports.LikeServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.LikeServiceService, "like.LikeService");
function isSet(value) {
    return value !== null && value !== undefined;
}
