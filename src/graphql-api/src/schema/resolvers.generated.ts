/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { Category } from './categories/resolvers/Category';
import    { Product } from './products/resolvers/Product';
import    { categories as Query_categories } from './categories/resolvers/Query/categories';
import    { product as Query_product } from './products/resolvers/Query/product';
    export const resolvers: Resolvers = {
      Query: { categories: Query_categories,product: Query_product },
      
      
      Category: Category,
Product: Product
    }