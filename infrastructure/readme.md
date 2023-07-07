# Infrastructure

In this folder there are bicep files to configure a cosmos-db with MongoDB api, a MSSQL server, a key vault and a kubernetes cluster

### Requirements

- azure cli
- kubectl
- jq

## Usage

Get the azure cli and login, copy the `main.parameters.template.json` to `main.parameters.json`

Fill in all the parameters then run

```bash
./deploy-bicep.sh
```

in the scripts folder.

## Scripts

The scripts read configuration values from a file named `config.json`
See the config.template.json for the structure.
The `servicePrincipal` section should contain the values printed out after running `create-sp.sh`

### Service principle

In the scripts folder are helper scripts to create a service principal for role base authentication and to login with it.

## References

### Bicep Examples

| Description                                 | Url                                                                                           |
| ------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Authenticate Azure cli                      | https://learn.microsoft.com/en-us/cli/azure/authenticate-azure-cli                            |
| Example of a SqlServer deployment           | https://github.com/Azure-Samples/todo-csharp-sql/blob/main/infra/app/db.bicep                 |
| Example of full AKS with MongoDb and Nodejs | https://github.com/Azure-Samples/todo-nodejs-mongo-aks                                        |
| Example of aks and Cosmos Db                | https://github.com/Azure-Samples/cosmos-aks-samples                                           |
| Quickstart for most of Azure services       | https://github.com/Azure/azure-quickstart-templates                                           |
| Tutorial for Cosmos Db deployment           | https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/tutorial-deploy-app-bicep-aks         |
| Tutorial for AKS                            | https://learn.microsoft.com/en-us/azure/aks/tutorial-kubernetes-deploy-cluster?tabs=azure-cli |
