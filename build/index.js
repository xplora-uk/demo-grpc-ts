"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_js_1 = require("@grpc/grpc-js");
const like_1 = require("./generated/like");
const implementation_1 = require("./implementation");
const server = new grpc_js_1.Server();
const HOST = process.env.HOST || "0.0.0.0";
const PORT = Number(process.env.PORT) || 50051;
const address = `${HOST}:${PORT}`;
main();
function main() {
    const myService = (0, implementation_1.newLikeServiceImplementation)();
    server.addService(like_1.LikeServiceService, myService);
    server.bindAsync(address, grpc_js_1.ServerCredentials.createInsecure(), (error, port) => {
        if (error) {
            throw error;
        }
        console.log("server is running on", port);
        server.start();
    });
}
