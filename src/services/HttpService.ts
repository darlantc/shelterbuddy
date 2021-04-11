export type HttpResponse = {
  statusCode: number;
  data?: any;
  error?: any;
};

export interface HttpService {
  get: (url: string) => Promise<HttpResponse>;
}
