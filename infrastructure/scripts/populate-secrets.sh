#!/usr/bin/env bash

keys=(AZURE-COSMOS-CONNECTION-STRING AZURE-SQL-CONNECTION-STRING AZURE-SQL-ADMIN-CONNECTION-STRING)

get-ai-connection-string() {
  echo 'APPLICATIONINSIGHTS_CONNECTION_STRING'
  local ai_connection_string=$(cat output.json | jq -r '.properties.outputs.applicationinsightS_CONNECTION_STRING.value')
  echo $ai_connection_string > ../../kubernetes/secrets/APPLICATIONINSIGHTS_CONNECTION_STRING
}

_set-dash-to-underscore() {
  local key=${1:?}
  local key_with_underscore=$(echo $key | sed 's/-/_/g')
  echo $key_with_underscore
}


get-keyvault-name() {
  local keyvault_name=$(cat output.json | jq -r '.properties.outputs.azurE_KEY_VAULT_NAME.value')
  echo $keyvault_name
}

get-value() {
  local key=${1:?}
  local value=$(az keyvault secret show --vault-name $(get-keyvault-name) --name $key --query value -o tsv)
  echo $value
}

get-keys() {
  local env_path="../../.env"
  echo "# new azure values $(date)" >> $env_path
  for key in "${keys[@]}"; do
    echo $key
    value=$(get-value $key)
    echo $value > "../../kubernetes/secrets/$(_set-dash-to-underscore $key)"
    echo "$(_set-dash-to-underscore $key)=$value" >> $env_path
  done
}

get-keys
get-ai-connection-string
