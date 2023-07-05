using System.Text.Json;
using System.Text.Json.Serialization;
using Microsoft.Extensions.DependencyInjection;
using PriceApi.DataAccess;
using PriceApi.DataAccess.Models;

namespace SeedApp.Seed;

public static class DbInitializer
{

    public static void InitAndSeedDatabase(IServiceProvider appServices, string? dataJsonPath)
    {
        using var scope = appServices.CreateScope();
        var services = scope.ServiceProvider;

        var context = services.GetRequiredService<PriceDbContext>();
        context.Database.EnsureCreated();
        if (dataJsonPath is null)
        {
            return;
        }
        Seed(context, dataJsonPath);
    }

    private static void Seed(PriceDbContext priceDbContext, string dataJsonPath)
    {
        if (priceDbContext.Products.Any())
        {
            return;
        }

        // read json file into memory
        var productsJson = File.ReadAllText(dataJsonPath);
        var products = JsonSerializer.Deserialize<List<MongoProductJson>>(productsJson) ?? throw new InvalidOperationException("products is null");
        var productsToSeed = products.Select(p => new Product
        {
            ExternalId = p.Id.Oid,
            Name = p.Name,
        }).ToList();

        foreach (var product in productsToSeed)
        {
            var productPrice = new ProductPriceFakeBuilder(product).Generate();
            product.ProductPrice = productPrice;
        }

        priceDbContext.Products.AddRange(productsToSeed);
        priceDbContext.SaveChanges();
    }

    private class MongoProductJson
    {
        [JsonPropertyName("_id")]
        public ObjectId Id { get; set; }

        [JsonPropertyName("category")]
        public string Category { get; set; } = null!;
        [JsonPropertyName("subcategory")]
        public string Subcategory { get; set; } = null!;
        [JsonPropertyName("name")]
        public string Name { get; set; } = null!;
        [JsonPropertyName("createdOn")]
        public DateTime CreatedOn { get; set; }
    }
    private struct ObjectId
    {
        [JsonPropertyName("$oid")]
        public string Oid { get; set; }
    }
}
