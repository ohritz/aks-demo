namespace PriceApi.DataAccess.Models;
public class ProductPrice
{
    public int Id { get; set; }
    public string Currency { get; set; } = null!;
    public decimal Price { get; set; }
    public int ProductId { get; set; }
}
