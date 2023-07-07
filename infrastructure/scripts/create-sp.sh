#!/usr/bin/env bash

resourceGroup="$(cat ./config.json | jq -r '.resourceGroup')"
subscriptionId="$(cat ./config.json | jq -r '.subscriptionId')"
adminname="$(cat ./config.json | jq -r '.adminname')"

az ad sp create-for-rbac --name $adminname \
--role Owner \
--scopes "/subscriptions/$subscriptionId" \
--create-cert
