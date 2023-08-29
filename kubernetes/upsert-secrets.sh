#!/usr/bin/env bash

secret_name="cb-demo-secret"

secret-count() {
  local count=$(kubectl get secrets -o json | jq -r '.items | length')
  echo $count
}

if [ $(secret-count) -eq 1 ]; then
  echo "Secret $secret_name exists - deleting"
  kubectl delete secret cb-demo-secret
else
  echo "Secret $secret_name does not exist"
fi

kubectl create secret generic cb-demo-secret --from-file=./secrets
