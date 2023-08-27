#!/usr/bin/env bash

deploymentName="$(cat ./config.json | jq -r '.deploymentName')"
location="$(cat ./config.json | jq -r '.location')"

pushd ../bicep

output=$(az deployment sub create \
  --name $deploymentName \
  --location $location \
  --template-file main.bicep \
--parameters @main.parameters.json)

popd

echo $output | jq > output.json
