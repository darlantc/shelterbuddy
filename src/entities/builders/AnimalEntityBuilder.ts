import { generateRandomInteger } from "../../utils/utils";

import AnimalEntity, { AnimalType, AnimalGender } from "../AnimalEntity";

export default class AnimalEntityBuilder {
  private animal = new AnimalEntity({
    id: generateRandomInteger(),
    type: AnimalType.unknown,
    breed: "Unknown",
    gender: AnimalGender.female,
    color: "Brown",
  });

  public static create(): AnimalEntityBuilder {
    return new AnimalEntityBuilder();
  }

  public withCustomName(name: string): AnimalEntityBuilder {
    this.animal.name = name;
    return this;
  }

  public withName(): AnimalEntityBuilder {
    this.animal.name = "The Animal";
    return this;
  }
  public withDifferentName(): AnimalEntityBuilder {
    this.animal.name = "The Best Animal";
    return this;
  }

  public aDog(): AnimalEntityBuilder {
    this.animal.type = AnimalType.dog;
    this.animal.breed = "Pug";
    this.animal.color = "Chocolate";
    return this;
  }

  public aCat(): AnimalEntityBuilder {
    this.animal.type = AnimalType.cat;
    this.animal.breed = "Domestic Short Hair";
    this.animal.color = "Red Tabby";
    return this;
  }

  public asMale(): AnimalEntityBuilder {
    this.animal.gender = AnimalGender.male;
    return this;
  }

  public withDifferentBreed(breed: string): AnimalEntityBuilder {
    this.animal.breed = breed;
    return this;
  }

  public withDifferentColor(color: string): AnimalEntityBuilder {
    this.animal.color = color;
    return this;
  }

  public build(): AnimalEntity {
    return this.animal;
  }
}
