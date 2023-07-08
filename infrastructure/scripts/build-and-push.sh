#!/usr/bin/env bash

acrName="$(cat config.json | jq -r '.acrName')"

az acr login --name $acrName

pushd ../../
docker compose -f docker-compose.acr.yml build
docker compose -f docker-compose.acr.yml push

popd

