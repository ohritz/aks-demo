import lodash from "lodash";
import { productsResolver } from "./features/products/resolvers.js";

export const resolvers = lodash.merge(productsResolver);
