"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newLikeServiceImplementation = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
function newLikeServiceImplementation() {
    const likeCampaign = (call, callback) => {
        console.log(new Date(), 'LikeService.likeCampaign', call.request);
        try {
            return callback(null, {
                error: '',
                success: true,
            });
        }
        catch (err) {
            console.error(err);
            callback({ code: grpc_js_1.status.INTERNAL }, null);
        }
    };
    return {
        likeCampaign,
    };
}
exports.newLikeServiceImplementation = newLikeServiceImplementation;
