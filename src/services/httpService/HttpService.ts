export type HttpResponse<T> = {
  statusCode: number;
  data?: T;
  error?: any;
};

export interface HttpService {
  baseUrl: string;

  get: <T>(url: string) => Promise<HttpResponse<T>>;
  post: <T>(url: string, data: any) => Promise<HttpResponse<T>>;
}
