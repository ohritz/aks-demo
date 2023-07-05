/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated.js";
import { Category } from "./categories/resolvers/Category.js";
import { Price } from "./products/resolvers/Price.js";
import { Product } from "./products/resolvers/Product.js";
import { categories as Query_categories } from "./categories/resolvers/Query/categories.js";
import { product as Query_product } from "./products/resolvers/Query/product.js";
import { productsByCategories as Query_productsByCategories } from "./products/resolvers/Query/productsByCategories.js";
export const resolvers: Resolvers = {
  Query: {
    categories: Query_categories,
    product: Query_product,
    productsByCategories: Query_productsByCategories,
  },

  Category: Category,
  Price: Price,
  Product: Product,
};
