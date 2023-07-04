using Microsoft.EntityFrameworkCore;
using PriceApi.DataAccess.Models;

namespace PriceApi.DataAccess;

public class PriceDbContext : DbContext
{
    public PriceDbContext(DbContextOptions<PriceDbContext> options)
        : base(options)
    {
    }

    public DbSet<Product> Products { get; set; }
    public DbSet<ProductPrice> ProductPrices { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>().ToTable("Products");
        modelBuilder.Entity<ProductPrice>().ToTable("ProductPrices");
    }
}



