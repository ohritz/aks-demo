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
        modelBuilder.Entity<Product>(entity =>
        {
            entity.ToTable("Products");
            entity.HasOne(d => d.ProductPrice)
                .WithOne(p => p.Product)
                .HasForeignKey<Product>(d => d.Id)
                .OnDelete(DeleteBehavior.Cascade);
            entity.HasIndex(e => e.ExternalId, "IX_Products")
                .IsUnique();
        });
        modelBuilder.Entity<ProductPrice>(entity =>
        {
            entity.ToTable("ProductPrices");
            entity.HasOne(d => d.Product)
                .WithOne(p => p.ProductPrice);
            entity.Property(e => e.Currency)
            .IsRequired()
            .HasMaxLength(3);
            entity.Property(e => e.Price)
                .HasColumnType("decimal(18, 2)");
        });
    }
}



