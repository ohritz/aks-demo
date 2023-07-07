#!/usr/bin/env bash

appId="$(cat ./config.json| jq -r '.servicePrincipal.appId')"
tenantId="$(cat ./config.json| jq -r '.servicePrincipal.tenant')"
cert="$(cat ./config.json| jq -r '.servicePrincipal.fileWithCertAndPrivateKey')"

isLogin=$(az login --service-principal --username $appId --tenant $tenantId --password $cert)

if [[ ! -z "$isLogin" ]]; then
    echo "Login Success"
    exit 0
fi
