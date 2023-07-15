import { fetchJsonWithGet } from "../common/fetch/http-fetch";
import { getConfig } from "../config/index";
const config = getConfig();
const baseUrl = config.dependencies.productsApiUrl;

export interface ApiProduct {
  _id: string;
  category: string;
  subcategory: string;
  name: string;
  createdOn: string;
}

export const fetchProducts = async (): Promise<ApiProduct[]> => {
  return await fetchJsonWithGet<ApiProduct[]>(`${baseUrl}/products`);
};
export const fetchProductsById = async (id: string): Promise<ApiProduct> => {
  return await fetchJsonWithGet<ApiProduct>(`${baseUrl}/products/${id}`);
};

export const fetchProductsByCategories = async (
  categories: readonly string[]
): Promise<ApiProduct[]> => {
  const categoriesQuery = `categories=${categories.join(",")}`;
  return await fetchJsonWithGet<ApiProduct[]>(
    `${baseUrl}/products?${categoriesQuery}`
  );
};

export const fetchCategories = async (): Promise<string[]> => {
  return await fetchJsonWithGet<string[]>(`${baseUrl}/categories`);
};
