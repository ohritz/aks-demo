import { createGrpcCredentials } from "./grpc-credentials-factory.js";
import {
  ProductPriceServiceClient,
  PricesRequest,
  PriceDetail,
} from "./grpc/proto/ProductPriceService.js";

const priceApiGrpcUrl = process.env.PRICE_API_GRPC_URL;

const priceApiClient = new ProductPriceServiceClient(
  priceApiGrpcUrl,
  createGrpcCredentials()
);

export const getPrices = async (ids: readonly string[]) => {
  const pricesRequest = PricesRequest.create({
    ids: [...ids],
  });

  const prices = await new Promise<PriceDetail[]>((resolve, reject) => {
    priceApiClient.getPrices(pricesRequest, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.priceDetails);
      }
    });
  });

  return prices;
};
