#!/usr/bin/env bash

subscription="$(cat ./config.json | jq -r '.subscription')"

az login
az account set --subscription $subscription
