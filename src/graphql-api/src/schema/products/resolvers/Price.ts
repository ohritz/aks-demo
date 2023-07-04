import type { PriceResolvers } from "./../../types.generated";
export const Price: PriceResolvers = {
  /* Implement Price resolver logic here */
  currency: (parent, args, ctx) => parent.currency,
  price: (parent, args, ctx) => parent.price,
  id: (parent, args, ctx) => parent.id,
};
