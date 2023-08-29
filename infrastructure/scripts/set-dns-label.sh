#!/usr/bin/env bash
# https://learn.microsoft.com/en-us/azure/aks/ingress-tls?tabs=azure-cli

# Public IP address of your ingress controller
IP="MY_EXTERNAL_IP"

# Name to associate with public IP address
DNSLABEL="cb-demo-2023"

# Get the resource-id of the public IP
PUBLICIPID=$(az network public-ip list --query "[?name!=null]|[?contains(name, 'kubernetes')].[id]" --output tsv)

# Update public IP address with DNS name
az network public-ip update --ids $PUBLICIPID --dns-name $DNSLABEL

# # Display the FQDN
az network public-ip show --ids $PUBLICIPID --query "[dnsSettings.fqdn]" --output tsv
