import { HttpResponse, HttpService } from "./HttpService";

class FetchHttpService implements HttpService {
  defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  get = async (url: string): Promise<HttpResponse> => {
    try {
      const response = await fetch(url, {
        headers: this.defaultHeaders,
      });
      return {
        statusCode: response.status,
        data: response.json(),
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
