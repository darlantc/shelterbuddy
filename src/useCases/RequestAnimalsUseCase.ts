import AnimalEntity from "../entities/AnimalEntity";
import { HttpService } from "../services/HttpService";

class RequestAnimalsUseCase {
  httpService: HttpService;

  constructor(httpService: HttpService) {
    this.httpService = httpService;
  }

  request = async (): Promise<AnimalEntity[]> => {
    const url = "assets/data/AnimalList.json";

    const list: AnimalEntity[] = [];

    try {
      const { statusCode, data } = await this.httpService.get(url);
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
}

export default RequestAnimalsUseCase;
