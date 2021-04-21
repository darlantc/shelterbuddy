import { HttpResponse, HttpService } from "../services/httpService/HttpService";
import RequestAnimalsUseCase from "./RequestAnimalsUseCase";

import MockAnimalsList from "./mockData/MockAnimalsList.json";
import ShelterBuddyService from "../services/ShelterBuddyService";

describe("RequestAnimalsUseCase", () => {
  it("should request list of animals", async () => {
    const sut = makeSUT();

    const animals = await sut.request();

    expect(animals.length).toBeGreaterThan(0);
  });
});

// Helpers
const makeSUT = (): RequestAnimalsUseCase => {
  const httpService: HttpService = new MockHttpService();
  const sbService = new ShelterBuddyService(httpService);

  return new RequestAnimalsUseCase(sbService);
};

class MockHttpService implements HttpService {
  baseUrl: string = "";

  get = async (url: string): Promise<HttpResponse<any>> => {
    return {
      statusCode: 200,
      data: MockAnimalsList,
    };
  };

  post = async (url: string, data: any): Promise<HttpResponse<any>> => {
    return {
      statusCode: 200,
    };
  };
}

export {};
