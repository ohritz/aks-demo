import fetch, { Response } from "node-fetch";
import { logIfLocal } from "../log/local-logger";
import { DetailedApiError } from "./detailed-api-error";
import { formatMs } from "./time-formatter";
import { throwIfNotOk } from "./validator";

export type HttpMethod = "GET" | HttpMethodWithBody;
export type HttpMethodWithBody = "POST" | "PUT" | "DELETE" | "PATCH";

export const fetchJsonWithOptionalResponse = async <TResponse>(
  authorization: string,
  url: string,
  allowNotFound: boolean
): Promise<TResponse | undefined> => {
  const start = Date.now();

  const response = await fetch(url, {
    headers: {
      "content-type": "application/json",
      authorization,
    },
  });

  if (!response) {
    throw new DetailedApiError(
      "Error fetching data, got undefined response.",
      url,
      []
    );
  }

  const duration = Date.now() - start;

  logIfLocal(`${response.status}`, {
    start,
    method: "GET",
    url,
    duration: formatMs(duration),
  });

  if (allowNotFound && response.status === 404) {
    return undefined;
  }

  await throwIfNotOk(response, url);

  const r = (await response.json()) as TResponse;

  if (!allowNotFound && r == null) {
    throw new DetailedApiError(
      "Got empty response where not allowed.",
      url,
      []
    );
  }

  return r;
};

export const fetchResponseBase = async (
  authorization: string,
  url: string,
  method: HttpMethod,
  validateError: boolean
): Promise<Response> => {
  const start = Date.now();
  const response = await fetch(url, {
    method,
    headers: {
      "content-type": "application/json",
      authorization,
    },
  });
  const duration = Date.now() - start;

  logIfLocal(`${response.status}`, {
    start,
    method,
    url,
    duration: formatMs(duration),
  });

  if (validateError) {
    await throwIfNotOk(response, url);
  }

  return response;
};

export const fetchResponseWithBodyBase = async <TBody>(
  authorization: string,
  url: string,
  body: TBody,
  method: HttpMethodWithBody,
  validateError: boolean
): Promise<Response> => {
  const start = Date.now();
  const response = await fetch(url, {
    method,
    headers: {
      "content-type": "application/json",
      authorization,
    },
    body: JSON.stringify(body),
  });

  const duration = Date.now() - start;

  logIfLocal(`${response.status}`, {
    start,
    method,
    url,
    body: JSON.stringify(body, null, 2),
    duration: formatMs(duration),
  });

  if (validateError) {
    await throwIfNotOk(response, url);
  }

  return response;
};
