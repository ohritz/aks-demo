/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { Category } from './categories/resolvers/Category';
import    { Product } from './products/resolvers/Product';
import    { categories as Query_categories } from './categories/resolvers/Query/categories';
import    { product as Query_product } from './products/resolvers/Query/product';
import    { productsByCategories as Query_productsByCategories } from './products/resolvers/Query/productsByCategories';
    export const resolvers: Resolvers = {
      Query: { categories: Query_categories,product: Query_product,productsByCategories: Query_productsByCategories },
      
      
      Category: Category,
Product: Product
    }