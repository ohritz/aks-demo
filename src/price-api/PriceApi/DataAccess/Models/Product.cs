namespace PriceApi.DataAccess.Models;
public class Product
{
    public Product()
    {
        Prices = new List<ProductPrice>();
    }
    public int Id { get; set; }
    public string ExternalId { get; set; } = null!;
    public string Name { get; set; } = null!;
    public ICollection<ProductPrice> Prices { get; set; }
}
