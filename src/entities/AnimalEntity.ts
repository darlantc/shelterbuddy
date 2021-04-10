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
}

export default AnimalEntity;
