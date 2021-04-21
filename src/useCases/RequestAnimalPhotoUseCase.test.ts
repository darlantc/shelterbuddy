import RequestAnimalPhotoUseCase from "./RequestAnimalPhotoUseCase";

import MockAnimalPhotoList from "./mockData/MockAnimalPhotoList.json";
import { HttpResponse, HttpService } from "../services/httpService/HttpService";
import ShelterBuddyService from "../services/ShelterBuddyService";

describe("RequestAnimalPhotoUseCase", () => {
  it("should get photos for existing id", async () => {
    const sut = makeSUT();

    const photo1 = await sut.requestAnimalPhoto(557943);
    expect(photo1?.thumbnail).toBeTruthy();
    expect(photo1?.full.includes("/1024---n")).toBe(true);

    const photo2 = await sut.requestAnimalPhoto(443812);
    expect(photo2?.thumbnail).toBeTruthy();
    expect(photo2?.full.includes("/1024---n")).toBe(true);
  });

  it("should return null for non existing id", async () => {
    const sut = makeSUT();

    const photo1 = await sut.requestAnimalPhoto(10);
    expect(photo1?.thumbnail).toBeFalsy();
    expect(photo1?.full).toBeFalsy();

    const photo2 = await sut.requestAnimalPhoto(9999);
    expect(photo2?.thumbnail).toBeFalsy();
    expect(photo2?.full).toBeFalsy();
  });
});

// Helpers
const makeSUT = (): RequestAnimalPhotoUseCase => {
  const httpService: HttpService = new MockHttpService();
  const sbService = new ShelterBuddyService(httpService);

  return new RequestAnimalPhotoUseCase(sbService);
};

class MockHttpService implements HttpService {
  baseUrl: string = "";

  get = async (url: string): Promise<HttpResponse<any>> => {
    return {
      statusCode: 200,
      data: MockAnimalPhotoList,
    };
  };

  post = async (url: string, data: any): Promise<HttpResponse<any>> => {
    return {
      statusCode: 200,
    };
  };
}

export {};
