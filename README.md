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
