import { fetchJsonWithGet } from "../common/fetch/http-fetch";

const baseUrl = process.env.PRODUCTS_API_URL || "http://localhost:3000";

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

export const fetchCategories = async (): Promise<string[]> => {
  return await fetchJsonWithGet<string[]>(`${baseUrl}/categories`);
};