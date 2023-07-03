import { fetchJsonWithGet } from "../common/fetch/http-fetch";

const baseUrl = process.env.PRODUCTS_API_URL || "http://localhost:3000";
const url = `${baseUrl}/products`;

export interface ApiProduct {
  _id: string;
  category: string;
  subcategory: string;
  name: string;
  createdOn: string;
}

export const fetchProducts = async (): Promise<ApiProduct[]> => {
  return await fetchJsonWithGet<ApiProduct[]>(url);
};
