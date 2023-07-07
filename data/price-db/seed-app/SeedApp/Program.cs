using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PriceApi.DataAccess;
using SeedApp.Seed;

var configuration = new ConfigurationBuilder()
    .AddEnvironmentVariables()
    .Build();


var connectionString = configuration.GetConnectionString("PriceDb");
var dataJsonPath = configuration.GetValue<string?>("DATA_JSON_PATH");

var services = new ServiceCollection();

services.AddDbContext<PriceDbContext>(options =>
    options.UseSqlServer(connectionString));

var sp = services.BuildServiceProvider();

DbInitializer.InitAndSeedDatabase(sp, dataJsonPath);
