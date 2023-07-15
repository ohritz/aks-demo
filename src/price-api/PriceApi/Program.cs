using Microsoft.EntityFrameworkCore;
using PriceApi.Services;
using PriceApi.DataAccess;
using Serilog;
using Serilog.Events;
using Serilog.Formatting.Compact;
using Azure.Monitor.OpenTelemetry.AspNetCore;
using OpenTelemetry.Trace;
using OpenTelemetry.Resources;

Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Override("Microsoft", LogEventLevel.Information)
    .Enrich.FromLogContext()
    .WriteTo.Console(new CompactJsonFormatter())
    .CreateBootstrapLogger();

try
{
    var builder = WebApplication.CreateBuilder(args);

    builder.Host.UseSerilog((context, services, configuration) => configuration
    .ReadFrom.Configuration(context.Configuration)
    .ReadFrom.Services(services)
    .Enrich.FromLogContext()
    .WriteTo.Console(new CompactJsonFormatter()));

    // Add services to the container.
    builder.Services
    .AddGrpc()
    .Services
    .AddGrpcReflection();

    var connectionString = builder.Configuration.GetConnectionString("PriceDb");
    builder.Services.AddDbContext<PriceDbContext>(options =>
        options.UseSqlServer(connectionString));

    var resourceAttributes = new Dictionary<string, object> {
    { "service.name", "price-api" }};

    builder.Services.AddOpenTelemetry().UseAzureMonitor();
    builder.Services.ConfigureOpenTelemetryTracerProvider((sp, builder) =>
        builder.ConfigureResource(resourceBuilder =>
            resourceBuilder.AddAttributes(resourceAttributes)));

    var app = builder.Build();

    // Configure the HTTP request pipeline.
    // app.MapGrpcService<ProductPriceGrpcService>();

    app.MapGrpcReflectionService();
    app.MapGrpcService<ProductPriceGrpcService>();
    app.MapGet(
                   "/",
                   async context => await context.Response
                       .WriteAsync("Communication with gRPC endpoints must be made through a gRPC client.")
                       .ConfigureAwait(false));

    app.Run();
}
catch (Exception ex)
{
    Log.Fatal(ex, "Application terminated unexpectedly");
    throw;
}
finally
{
    Log.CloseAndFlush();
}
