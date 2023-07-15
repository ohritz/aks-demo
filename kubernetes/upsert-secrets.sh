#!/usr/bin/env bash

kubectl delete secret cb-demo-secret
kubectl create secret generic cb-demo-secret --from-file=./secrets
