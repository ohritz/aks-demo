#!/usr/bin/env bash

export $(cat ./.env)

rm allFiles.yaml
rm deploy.yaml

for file in $(find . -name "*.yaml"); do
    echo "Deploying $file"
    cat $file >> allFiles.yaml;
    echo '---' >> allFiles.yaml
done
envsubst <allFiles.yaml > deploy.yaml
rm allFiles.yaml
