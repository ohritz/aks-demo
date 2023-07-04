# Run setup scripts to create empty database
/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P $MSSQL_SA_PASSWORD -d master -i ./dbsetup/tm/Setup/CreateDatabase.sql
