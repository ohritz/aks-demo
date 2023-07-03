/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { Category } from './categories/resolvers/Category';
import    { Product } from './products/resolvers/Product';
import    { categories as Query_categories } from './categories/resolvers/Query/categories';
import    { products as Query_products } from './products/resolvers/Query/products';
    export const resolvers: Resolvers = {
      Query: { categories: Query_categories,products: Query_products },
      
      
      Category: Category,
Product: Product
    }