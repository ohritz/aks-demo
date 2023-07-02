import type { ProductResolvers } from "./../../types.generated";
export const Product: ProductResolvers = {
  /* Implement Product resolver logic here */
  category: (parent, args, ctx) => parent.category,
  createdOn: (parent, args, ctx) => parent.createdOn,
  id: (parent, args, ctx) => parent._id,
  name: (parent, args, ctx) => parent.name,
  subCategory: (parent, args, ctx) => parent.subcategory,
};
