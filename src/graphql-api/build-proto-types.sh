#!/bin/bash

PROTO_DEST=./src/clients/grpc/
IMPORT_DIR="./proto"

mkdir -p ${PROTO_DEST}

protoc --plugin=$(npm root)/.bin/protoc-gen-ts_proto \
--ts_proto_out="${PROTO_DEST}" \
--ts_proto_opt=outputServices=grpc-js \
--ts_proto_opt=esModuleInterop=true \
-I=./ ./**/*.proto
