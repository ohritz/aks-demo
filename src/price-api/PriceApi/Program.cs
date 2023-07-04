using Microsoft.EntityFrameworkCore;
using PriceApi.Services;
using PriceApi.DataAccess;

var builder = WebApplication.CreateBuilder(args);

// Additional configuration is required to successfully run gRPC on macOS.
// For instructions on how to configure Kestrel and gRPC clients on macOS, visit https://go.microsoft.com/fwlink/?linkid=2099682

// Add services to the container.
builder.Services
.AddGrpc()
.Services
.AddGrpcReflection();

builder.Services.AddDbContext<PriceDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("PriceDb")));

var app = builder.Build();

app.UseRouting();
// Configure the HTTP request pipeline.
// app.MapGrpcService<ProductPriceGrpcService>();
app.UseEndpoints(endpoints =>
{
    endpoints.MapGrpcReflectionService();
    endpoints.MapGrpcService<ProductPriceGrpcService>();
    endpoints.MapGet(
                   "/",
                   async context => await context.Response
                       .WriteAsync("Communication with gRPC endpoints must be made through a gRPC client.")
                       .ConfigureAwait(false));
});

app.Run();
