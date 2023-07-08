#!/usr/bin/env bash
aksName="$(cat config.json | jq -r '.aksName')"
resourceGroup="$(cat config.json | jq -r '.resourceGroup')"
az aks get-credentials --resource-group $resourceGroup --name $aksName
