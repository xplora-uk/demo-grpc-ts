import { Server, ServerCredentials } from '@grpc/grpc-js';
import { LikeServiceService } from './generated/like';
import { newLikeServiceImplementation } from './implementation';

const server = new Server();

const HOST = process.env.HOST || "0.0.0.0";
const PORT = Number(process.env.PORT) || 50051;

const address = `${HOST}:${PORT}`;

main();

function main() {

  const myService = newLikeServiceImplementation();

  server.addService(LikeServiceService, myService);

  server.bindAsync(
    address,
    ServerCredentials.createInsecure(),
    (error, port) => {
      if (error) {
        throw error;
      }
      console.log("server is running on", port);
      server.start();
    }
  );
}