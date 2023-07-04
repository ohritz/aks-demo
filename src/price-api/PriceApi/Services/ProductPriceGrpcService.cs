using Grpc.Core;
using Microsoft.EntityFrameworkCore;
using PriceApi.DataAccess;
using PriceApi.Schema;

namespace PriceApi.Services;

public class ProductPriceGrpcService : ProductPriceService.ProductPriceServiceBase
{
    private readonly PriceDbContext _dbContext;

    public ProductPriceGrpcService(PriceDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public override async Task<PricesReply> GetPrices(PricesRequest request, ServerCallContext context)
    {
        var prices = await _dbContext.Products
            .Where(p => request.Ids.Contains(p.ExternalId))
            .Select(p => new PriceDetail
            {
                Id = p.ExternalId,
                Price = (float)p.ProductPrice.Price,
                Currency = p.ProductPrice.Currency
            })
            .ToListAsync();
        var reply = new PricesReply();

        reply.PriceDetails.AddRange(prices);
        return reply;
    }

    public override async Task<PriceReply> GetPrice(PriceRequest request, ServerCallContext context)
    {
        var product = await _dbContext.Products
            .Where(p => p.ExternalId == request.Id)
            .Select(p => new PriceDetail
            {
                Id = p.ExternalId,
                Price = (float)p.ProductPrice.Price,
                Currency = p.ProductPrice.Currency
            })
            .FirstOrDefaultAsync();
        var reply = new PriceReply();

        if (product == null)
        {
            throw new RpcException(new Status(StatusCode.NotFound, $"Product with id {request.Id} not found"));
        }

        reply.PriceDetail = product;
        return reply;
    }
}
