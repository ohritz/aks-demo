namespace PriceApi.DataAccess.Models;
public class Product
{
    public int Id { get; set; }
    public string ExternalId { get; set; } = null!;
    public string Name { get; set; } = null!;
    public ProductPrice ProductPrice { get; set; }
}
