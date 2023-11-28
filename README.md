# demo-grpc-ts

Demo gRPC service using the latest gRPC module, API-first approach, Protocol Buffers, code generation and TypeScript

## requirements

Node v16.x - you can use [NVM](https://github.com/nvm-sh/nvm)

[Protocol Buffers compiler](https://grpc.io/docs/protoc-installation/)

```sh
brew install protobuf
```

## installation

```sh
npm i
```

## configuration

None

## build

```sh
# after you change like.proto file
npm run generate

npm run build
```

## execution

```sh
# run transpiled code in JS
npm run start

# run TS code
npm run start:dev
```

## test

You can use [grpcurl](https://github.com/fullstorydev/grpcurl)

```sh
# install
brew install grpcurl

# use
npm run test:grpcurl

# alias for
grpcurl -plaintext -proto like.proto -d '{"userId": "u1", "campaignId": "c2"}' 127.0.0.1:50051 like.LikeService/likeCampaign
```

## warnings

If we keep a separate copy of the protocol file in the repo of gRPC client, we must apply every change on both files. For example, if we update the message payload:

```
message LikeCampaignRequest {
  string userId = 1;
  string date = 2; // <-- new attribute injected; not recommended; normally it should be appended.
  string campaignId = 3;
}
```

If the client is not updated the same payload:

```json
{"userId": "u1", "campaignId": "c2"}
```

will be received differently by the server:

```json
{"userId": "u1", "date": "c2", "campaignId": ""}
```

gRPC service will not throw any error, and it will distort the payload as it cares about the order of data points rather than the labels. It is not developer-friendly and it is prone to errors esp. it defaults to some empty values when a data point is missing in the payload. Empty string `""` is used for strings, zero `0` is used for numbers. We had to implement **fake** values like `"undefined"` and `-9999` for those, and we had to include all data points all the time for data modification operations! All of that can cause errors.

If we are using a single code repository for multiple components, we should maintain single copy of protocol files in order to avoid potential programming errors. For example, there are differences between these files:

* https://github.com/XploraTechnologiesAS/xplora-o2o-apiv2/blob/master/core/proto/core.proto
* https://github.com/XploraTechnologiesAS/xplora-o2o-apiv2/blob/master/ms-core/proto/core.proto
* https://github.com/XploraTechnologiesAS/xplora-o2o-apiv2/blob/master/ras-relay/proto/core.proto
* https://github.com/XploraTechnologiesAS/xplora-o2o-apiv2/blob/master/rmq-ras-script/proto/core.proto

We can have `protos` folder at root level to keep single copy of each protocol file.
