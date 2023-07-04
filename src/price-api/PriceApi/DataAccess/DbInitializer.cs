using System.Text.Json;
using System.Text.Json.Serialization;
using PriceApi.DataAccess;
using PriceApi.DataAccess.Models;

namespace PriceApi.DataAccess;

public static class DbInitializer
{

    public static void InitAndSeedDatabase(IServiceProvider appServices)
    {
        using var scope = appServices.CreateScope();
        var services = scope.ServiceProvider;

        var context = services.GetRequiredService<PriceDbContext>();
        context.Database.EnsureDeleted();
        context.Database.EnsureCreated();
        Seed(context);
    }

    private static void Seed(PriceDbContext priceDbContext)
    {
        if (priceDbContext.Products.Any())
        {
            return;
        }

        var currentDirectory = Directory.GetCurrentDirectory();
        var relativePath = Path.GetRelativePath(currentDirectory, "../../../data/products-db/products.json");


        // read json file into memory
        var productsJson = File.ReadAllText(relativePath);
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
