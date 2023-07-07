#!/usr/bin/env bash

pushd ../../
docker compose -f docker-compose.acr.yml build
docker compose -f docker-compose.acr.yml push

popd

