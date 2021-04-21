import { HttpResponse, HttpService } from "./HttpService";

class FetchHttpService implements HttpService {
  baseUrl: string;

  private defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  post = async <T>(url: string, data: any): Promise<HttpResponse<T>> => {
    try {
      const response = await fetch(`${this.baseUrl}/${url}`, {
        headers: this.defaultHeaders,
        method: "POST",
        body: data,
      });
      const jsonData = await response.json();
      return {
        statusCode: response.status,
        data: jsonData,
      };
    } catch (error) {
      return {
        statusCode: 500,
        error,
      };
    }
  };

  get = async <T>(url: string): Promise<HttpResponse<T>> => {
    try {
      const response = await fetch(`${this.baseUrl}/${url}`, {
        headers: this.defaultHeaders,
      });
      const jsonData = await response.json();
      return {
        statusCode: response.status,
        data: jsonData,
      };
    } catch (error) {
      return {
        statusCode: 500,
        error,
      };
    }
  };
}

export default FetchHttpService;
