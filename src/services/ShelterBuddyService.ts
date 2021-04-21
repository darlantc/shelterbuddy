import AnimalEntity from "../entities/AnimalEntity";
import AnimalPhotoEntity from "../entities/AnimalPhotoEntity";
import { HttpResponse, HttpService } from "./httpService/HttpService";

class ShelterBuddyService {
  httpService: HttpService;

  public constructor(httpService: HttpService) {
    this.httpService = httpService;
  }

  getAnimals = async (): Promise<AnimalEntity[]> => {
    const url = "assets/data/AnimalList.json";
    const list: AnimalEntity[] = [];

    try {
      const {
        statusCode,
        data,
      }: HttpResponse<any> = await this.httpService.get<any>(url);

      if (statusCode === 200 && data?.Data) {
        data.Data.forEach((itemData: any) => {
          const animal = AnimalEntity.fromJson(itemData);
          if (animal) {
            list.push(animal);
          }
        });
      }
    } catch (error) {
      console.error("RequestAnimalsUseCase request error", error);
    }

    return list;
  };

  getAnimalPhoto = async (
    animalId: number
  ): Promise<AnimalPhotoEntity | null> => {
    const url = "assets/data/AnimalPhotoList.json";

    try {
      const {
        statusCode,
        data,
      }: HttpResponse<any> = await this.httpService.get<any>(url);

      if (statusCode === 200 && data?.Data) {
        const animalData = data.Data.find(
          (itemData: any) => itemData?.Animal?.Id === animalId
        );
        if (animalData) {
          return AnimalPhotoEntity.fromJson(animalData);
        }
      }
    } catch (error) {
      console.error("RequestAnimalsUseCase request error", error);
    }

    return null;
  };
}

export default ShelterBuddyService;
