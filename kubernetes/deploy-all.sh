#!/usr/bin/env bash

export $(cat ./.env)

rm deploy.yaml

for file in $(find . -name "*.yaml"); do
    echo "Adding $file"
    cat $file >> allFiles.yaml;
    echo '---' >> allFiles.yaml
done
envsubst <allFiles.yaml > deploy.yaml
rm allFiles.yaml
