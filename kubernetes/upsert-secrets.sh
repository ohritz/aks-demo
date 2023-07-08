#!/usr/bin/env bash

kubectl create secret generic cb-demo-secret --from-file=./secrets
