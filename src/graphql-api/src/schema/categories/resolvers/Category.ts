import type { CategoryResolvers } from "./../../types.generated";
export const Category: CategoryResolvers = {
  /* Implement Category resolver logic here */
  id: (parent) => parent,
  name: (parent) => parent,
  products: (parent, args, ctx) => {
    return [];
  },
};
