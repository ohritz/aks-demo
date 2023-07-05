import type { ProductResolvers } from "./../../types.generated.js";
export const Product: ProductResolvers = {
  /* Implement Product resolver logic here */
  category: ({ category }) => category,
  createdOn: ({ createdOn }) => createdOn,
  id: ({ _id }) => _id,
  name: ({ name }) => name,
  subCategory: ({ subcategory }) => subcategory,
  price: ({ _id }, _, { loaders }) => {
    /* Product.price resolver is required because Product.price exists but ProductMapper.price does not */
    return loaders.priceByProductId.load(_id);
  },
};
