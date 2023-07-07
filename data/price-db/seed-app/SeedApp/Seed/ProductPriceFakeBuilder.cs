using Bogus;
using PriceApi.DataAccess.Models;

namespace SeedApp.Seed;
public class ProductPriceFakeBuilder : Faker<ProductPrice>
{
    public ProductPriceFakeBuilder(Product product)
    {
        RuleFor(p => p.Product, product);
        RuleFor(p => p.Currency, "SEK");
        RuleFor(p => p.Price, f => f.Finance.Amount(1, 1000));
    }
}
