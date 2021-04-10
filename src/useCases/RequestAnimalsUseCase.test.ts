import { HttpResponse, HttpService } from "../services/HttpService";
import RequestAnimalsUseCase from "./RequestAnimalsUseCase";

import MockAnimalsList from "./mockData/MockAnimalsList.json";

describe("RequestAnimalsUseCase", () => {
  it("should request list of animals", async () => {
    const httpService = new MockHttpService();
    const sut = new RequestAnimalsUseCase(httpService);

    const animals = await sut.request();

    expect(animals.length).toBeGreaterThan(0);
  });
});

// Helpers
class MockHttpService implements HttpService {
  get = async (url: string): Promise<HttpResponse> => {
    return {
      statusCode: 200,
      data: MockAnimalsList,
    };
  };
}

export {};
