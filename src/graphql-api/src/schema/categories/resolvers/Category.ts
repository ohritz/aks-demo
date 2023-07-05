import type { CategoryResolvers } from "./../../types.generated.js";
export const Category: CategoryResolvers = {
  /* Implement Category resolver logic here */
  id: (parent) => parent,
  name: (parent) => parent,
  products: (parent, _, ctx) => {
    return ctx.loaders.productsByCategory.load(parent);
  },
};
