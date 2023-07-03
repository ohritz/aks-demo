import { Response } from "node-fetch";
import { DetailedApiError } from "./detailed-api-error";

export const throwIfNotOk = async (
  response: Response,
  url: string
): Promise<Response> => {
  if (!response.ok) {
    const responseText = await response.text();
    throw new DetailedApiError(response.statusText, url, [responseText]);
  }
  return response;
};
