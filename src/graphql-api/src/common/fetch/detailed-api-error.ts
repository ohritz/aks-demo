export class DetailedApiError extends Error {
  public details: string[] | undefined = undefined;
  public endpoint: string;

  constructor(message: string, endpoint: string, details?: string[]) {
    super(message);
    Object.setPrototypeOf(this, DetailedApiError.prototype);
    this.details = details;
    this.endpoint = endpoint;
  }
}
