/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { Product } from './products/resolvers/Product';
import    { products as Query_products } from './products/resolvers/Query/products';
    export const resolvers: Resolvers = {
      Query: { products: Query_products },
      
      
      Product: Product
    }