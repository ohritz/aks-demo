param name string
param location string = resourceGroup().location
param tags object = {}

param databaseName string = ''
param keyVaultName string

@secure()
param sqlAdminPassword string
@secure()
param appUserPassword string

// Because databaseName is optional in main.bicep, we make sure the database name is set here.
var defaultDatabaseName = 'Todo'
var actualDatabaseName = !empty(databaseName) ? databaseName : defaultDatabaseName

module sqlServer '../core/database/sqlserver/sqlserver.bicep' = {
  name: 'sqlserver'
  scope: resourceGroup()
  params: {
    name: name
    location: location
    tags: tags
    databaseName: actualDatabaseName
    keyVaultName: keyVaultName
    sqlAdminPassword: sqlAdminPassword
    appUserPassword: appUserPassword
  }
}

output connectionStringKey string = sqlServer.outputs.connectionStringKey
output adminConnectionStringKey string = sqlServer.outputs.adminConnectionStringKey
output databaseName string = sqlServer.outputs.databaseName
