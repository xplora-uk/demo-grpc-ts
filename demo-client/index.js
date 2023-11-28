const newGrpcClient = require('@xplora-uk/grpc-client');

main();

async function main() {
  const likeService = newGrpcClient({
    protoFiles: ['./like.proto'],
    packageName: 'like',
    serviceName: 'LikeService',
    host: '127.0.0.1:50051',
  });

  const reply = await likeService.likeCampaign({
    userId: '1111',
    campaignId: '2222',
  });
  console.log(reply);
}
