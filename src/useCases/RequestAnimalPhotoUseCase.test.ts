import RequestAnimalPhotoUseCase from "./RequestAnimalPhotoUseCase";

import MockAnimalPhotoList from "./mockData/MockAnimalPhotoList.json";
import { HttpResponse, HttpService } from "../services/HttpService";

describe("RequestAnimalPhotoUseCase", () => {
  it("should get photos for existing id", async () => {
    const httpService = new MockHttpService();
    const sut = new RequestAnimalPhotoUseCase(httpService);

    const photo1 = await sut.requestAnimalPhoto(557943);
    expect(photo1?.thumbnail).toBeTruthy();
    expect(photo1?.full.includes("/1024---n")).toBe(true);

    const photo2 = await sut.requestAnimalPhoto(443812);
    expect(photo2?.thumbnail).toBeTruthy();
    expect(photo2?.full.includes("/1024---n")).toBe(true);
  });

  it("should return null for non existing id", async () => {
    const httpService = new MockHttpService();
    const sut = new RequestAnimalPhotoUseCase(httpService);

    const photo1 = await sut.requestAnimalPhoto(10);
    expect(photo1?.thumbnail).toBeFalsy();
    expect(photo1?.full).toBeFalsy();

    const photo2 = await sut.requestAnimalPhoto(9999);
    expect(photo2?.thumbnail).toBeFalsy();
    expect(photo2?.full).toBeFalsy();
  });
});

// Helpers
class MockHttpService implements HttpService {
  get = async (url: string): Promise<HttpResponse> => {
    return {
      statusCode: 200,
      data: MockAnimalPhotoList,
    };
  };
}

export {};
