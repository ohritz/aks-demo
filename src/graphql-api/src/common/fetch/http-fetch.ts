import { Response } from "node-fetch";
import { DetailedApiError } from "./detailed-api-error.js";
import {
  fetchJsonWithOptionalResponse,
  fetchResponseBase,
  fetchResponseWithBodyBase,
  HttpMethod,
  HttpMethodWithBody,
} from "./internal-fetchers.js";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BodyBase {}

export const fetchJsonWithBody = async <TBody extends BodyBase, TResponse>(
  url: string,
  body: TBody,
  method: HttpMethodWithBody = "POST"
): Promise<TResponse> => {
  const response = await fetchResponseWithBodyBase(url, body, method, true);
  return (await response.json()) as TResponse;
};

export const fetchResponseWithBody = <TBody extends BodyBase>(
  url: string,
  body: TBody,
  method: HttpMethodWithBody = "POST"
): Promise<Response> => fetchResponseWithBodyBase(url, body, method, true);

export const fetchResponseWithBodyNoThrow = <TBody extends BodyBase>(
  url: string,
  body: TBody,
  method: HttpMethodWithBody = "POST"
): Promise<Response> => fetchResponseWithBodyBase(url, body, method, false);

export const fetchResponse = (
  url: string,
  method: HttpMethod
): Promise<Response> => fetchResponseBase(url, method, true);

export const fetchResponseNoThrow = (
  url: string,
  method: HttpMethod
): Promise<Response> => fetchResponseBase(url, method, false);

export const fetchJsonWithGet = async <TResponse>(
  url: string
): Promise<TResponse> => {
  const r = await fetchJsonWithOptionalResponse<TResponse>(url, false);
  if (r == null) {
    throw new DetailedApiError(
      "Got empty response where not allowed.",
      url,
      []
    );
  }
  return r;
};

export const fetchJsonWithGetAllowNotFound = <TResponse>(
  url: string
): Promise<TResponse | undefined> =>
  fetchJsonWithOptionalResponse<TResponse>(url, true);
