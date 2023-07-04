import type { ProductResolvers } from "./../../types.generated";
export const Product: ProductResolvers = {
  /* Implement Product resolver logic here */
  category: (parent, args, ctx) => parent.category,
  createdOn: (parent, args, ctx) => parent.createdOn,
  id: (parent, args, ctx) => parent._id,
  name: (parent, args, ctx) => parent.name,
  subCategory: (parent, args, ctx) => parent.subcategory,
  price: (parent, args, ctx) => {
    /* Product.price resolver is required because Product.price exists but ProductMapper.price does not */
    return ctx.loaders.priceByProductId.load(parent._id);
  },
};
