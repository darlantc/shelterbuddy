import axios, { AxiosError, AxiosInstance } from "axios";
import { HttpResponse, HttpService } from "./HttpService";

class AxiosHttpService implements HttpService {
  baseUrl: string;
  protected readonly instance: AxiosInstance;

  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl;

    this.instance = axios.create({
      baseURL: baseUrl,
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  public get = async <T>(url: string): Promise<HttpResponse<T>> => {
    try {
      const { status, data } = await this.instance.get<T>(url);
      return {
        statusCode: status,
        data,
      };
    } catch (error) {
      return this.catchError(error);
    }
  };

  public post = async <T>(
    url: string,
    dataParams: any
  ): Promise<HttpResponse<T>> => {
    try {
      const { status, data } = await this.instance.post<T>(url, dataParams);
      return {
        statusCode: status,
        data,
      };
    } catch (error) {
      return this.catchError(error);
    }
  };

  private catchError = (error: any) => {
    if (error?.response) {
      const { response } = error as AxiosError;
      return {
        statusCode: response?.status || 500,
        error: response?.data,
      };
    }

    throw error;
  };
}

export default AxiosHttpService;
