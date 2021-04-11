import { HttpService } from "../services/HttpService";

import AnimalPhotoEntity from "../entities/AnimalPhotoEntity";

class RequestAnimalPhotoUseCase {
  httpService: HttpService;

  constructor(httpService: HttpService) {
    this.httpService = httpService;
  }

  requestAnimalPhoto = async (
    animalId: number
  ): Promise<AnimalPhotoEntity | null> => {
    const url = "assets/data/AnimalPhotoList.json";

    try {
      const { statusCode, data } = await this.httpService.get(url);
      if (statusCode === 200 && data?.Data) {
        const animalData = data.Data.find(
          (itemData: any) => itemData?.Animal?.Id === animalId
        );
        if (animalData) {
          return AnimalPhotoEntity.fromJson(animalData);
        }
      }
    } catch (error) {
      console.error(
        "RequestAnimalPhotoUseCase requestAnimalPhoto error",
        error
      );
    }

    return null;
  };
}

export default RequestAnimalPhotoUseCase;
