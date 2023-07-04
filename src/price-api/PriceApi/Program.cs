using Microsoft.EntityFrameworkCore;
using PriceApi.Services;
using PriceApi.DataAccess;
using System.Data.Common;

var builder = WebApplication.CreateBuilder(args);

// Additional configuration is required to successfully run gRPC on macOS.
// For instructions on how to configure Kestrel and gRPC clients on macOS, visit https://go.microsoft.com/fwlink/?linkid=2099682

// Add services to the container.
builder.Services
.AddGrpc()
.Services
.AddGrpcReflection();

var connectionString = builder.Configuration.GetConnectionString("PriceDb");

builder.Services.AddDbContext<PriceDbContext>(options =>
    options.UseSqlServer(connectionString));

var app = builder.Build();

// Configure the HTTP request pipeline.
// app.MapGrpcService<ProductPriceGrpcService>();

DbInitializer.InitAndSeedDatabase(app.Services);

app.MapGrpcReflectionService();
app.MapGrpcService<ProductPriceGrpcService>();
app.MapGet(
               "/",
               async context => await context.Response
                   .WriteAsync("Communication with gRPC endpoints must be made through a gRPC client.")
                   .ConfigureAwait(false));




app.Run();
