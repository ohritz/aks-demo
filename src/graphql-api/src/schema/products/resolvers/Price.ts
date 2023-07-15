import type { PriceResolvers } from "./../../types.generated";
export const Price: PriceResolvers = {
  /* Implement Price resolver logic here */
  currency: (parent) => parent.currency,
  price: (parent) => parent.price,
  id: (parent) => parent.id,
};
