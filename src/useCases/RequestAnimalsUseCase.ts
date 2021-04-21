import AnimalEntity from "../entities/AnimalEntity";
import ShelterBuddyService from "../services/ShelterBuddyService";

class RequestAnimalsUseCase {
  sbService: ShelterBuddyService;

  constructor(ShelterBuddyService: ShelterBuddyService) {
    this.sbService = ShelterBuddyService;
  }

  request = async (): Promise<AnimalEntity[]> => {
    return await this.sbService.getAnimals();
  };
}

export default RequestAnimalsUseCase;
