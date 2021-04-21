import ShelterBuddyService from "../services/ShelterBuddyService";

import AnimalPhotoEntity from "../entities/AnimalPhotoEntity";

class RequestAnimalPhotoUseCase {
  sbService: ShelterBuddyService;

  constructor(sbService: ShelterBuddyService) {
    this.sbService = sbService;
  }

  requestAnimalPhoto = async (
    animalId: number
  ): Promise<AnimalPhotoEntity | null> => {
    return await this.sbService.getAnimalPhoto(animalId);
  };
}

export default RequestAnimalPhotoUseCase;
