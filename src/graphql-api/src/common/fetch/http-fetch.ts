import { Response } from "node-fetch";
import { DetailedApiError } from "./detailed-api-error";
import {
  fetchJsonWithOptionalResponse,
  fetchResponseBase,
  fetchResponseWithBodyBase,
  HttpMethod,
  HttpMethodWithBody,
} from "./internal-fetchers";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BodyBase {}

export const fetchJsonWithBody = async <TBody extends BodyBase, TResponse>(
  authorization: string,
  url: string,
  body: TBody,
  method: HttpMethodWithBody = "POST"
): Promise<TResponse> => {
  const response = await fetchResponseWithBodyBase(
    authorization,
    url,
    body,
    method,
    true
  );
  return await response.json();
};

export const fetchResponseWithBody = <TBody extends BodyBase>(
  authorization: string,
  url: string,
  body: TBody,
  method: HttpMethodWithBody = "POST"
): Promise<Response> =>
  fetchResponseWithBodyBase(authorization, url, body, method, true);

export const fetchResponseWithBodyNoThrow = <TBody extends BodyBase>(
  authorization: string,
  url: string,
  body: TBody,
  method: HttpMethodWithBody = "POST"
): Promise<Response> =>
  fetchResponseWithBodyBase(authorization, url, body, method, false);

export const fetchResponse = (
  authorization: string,
  url: string,
  method: HttpMethod
): Promise<Response> => fetchResponseBase(authorization, url, method, true);

export const fetchResponseNoThrow = (
  authorization: string,
  url: string,
  method: HttpMethod
): Promise<Response> => fetchResponseBase(authorization, url, method, false);

export const fetchJsonWithGet = async <TResponse>(
  authorization: string,
  url: string
): Promise<TResponse> => {
  const r = await fetchJsonWithOptionalResponse<TResponse>(
    authorization,
    url,
    false
  );
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
  authorization: string,
  url: string
): Promise<TResponse | undefined> =>
  fetchJsonWithOptionalResponse<TResponse>(authorization, url, true);
