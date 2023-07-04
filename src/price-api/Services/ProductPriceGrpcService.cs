using Grpc.Core;
using PriceApi.Schema;

namespace PriceApi.Services;

public class ProductPriceGrpcService : ProductPriceService.ProductPriceServiceBase
{
    private readonly ILogger<ProductPriceGrpcService> _logger;
    public ProductPriceGrpcService(ILogger<ProductPriceGrpcService> logger)
    {
        _logger = logger;
    }

    public override Task<PricesReply> GetPrices(PricesRequest request, ServerCallContext context)
    {
        var reply = new PricesReply();
        var detail = new PriceDetail();
        detail.Id = request.Ids[0];
        detail.Price = 100;
        detail.Currency = "SEK";
        reply.PriceDetails.Add(detail);
        return Task.FromResult(reply);
    }
}
