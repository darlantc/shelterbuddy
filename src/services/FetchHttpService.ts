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
