export enum AnimalType {
  dog = "Dog",
  cat = "Cat",
  guineaPig = "Guinea Pig",
  mammal = "Mammal",
  rodent = "Rodent",
  unknown = "Unknown",
}

export enum AnimalGender {
  female = "Female",
  male = "Male",
}

export interface AnimalProps {
  id: number;
  name?: string;
  type: AnimalType;
  breed: string;
  gender: AnimalGender;
  color: string;
}

class AnimalEntity implements AnimalProps {
  id: number;
  name?: string;
  type: AnimalType;
  breed: string;
  gender: AnimalGender;
  color: string;

  constructor(props: AnimalProps) {
    this.id = props.id;
    this.name = props.name;
    this.type = props.type;
    this.breed = props.breed;
    this.gender = props.gender;
    this.color = props.color;
  }

  static fromJson = (data: any): AnimalEntity | null => {
    if (
      data.hasOwnProperty("Id") &&
      data.hasOwnProperty("Type") &&
      data.hasOwnProperty("Breed") &&
      data.hasOwnProperty("Sex") &&
      data.hasOwnProperty("Features")
    ) {
      return new AnimalEntity({
        id: data.Id,
        name: data.Name,
        type: data.Type.Name,
        breed: data.Breed.Primary.Name,
        gender: data.Sex.Name,
        color: data.Features.PrimaryColour,
      });
    }

    return null;
  };
}

export default AnimalEntity;
