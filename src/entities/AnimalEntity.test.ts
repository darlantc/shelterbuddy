import { AnimalGender, AnimalType } from "./AnimalEntity";
import AnimalEntityBuilder from "./builders/AnimalEntityBuilder";

describe("AnimalEntity", () => {
  it("should have an id but not a name", () => {
    const sut = AnimalEntityBuilder.create().build();
    expect(sut.id).toBeTruthy();
    expect(sut.name).toBeFalsy();
  });

  it("should have a valid name", () => {
    expect(AnimalEntityBuilder.create().withName().build().name).toBe(
      "The Animal"
    );
    expect(AnimalEntityBuilder.create().withDifferentName().build().name).toBe(
      "The Best Animal"
    );
  });

  it("should have valid type, breed and color", () => {
    const unknown = AnimalEntityBuilder.create().build();
    expect(unknown.type).toBe(AnimalType.unknown);
    expect(unknown.breed).toBe("Unknown");
    expect(unknown.color).toBe("Brown");

    const dog = AnimalEntityBuilder.create().aDog().build();
    expect(dog.type).toBe(AnimalType.dog);
    expect(dog.breed).toBe("Pug");
    expect(dog.color).toBe("Chocolate");

    const dog2 = AnimalEntityBuilder.create()
      .aDog()
      .withDifferentBreed("Appenzell Mountain Dog")
      .withDifferentColor("Chocolate Merle")
      .build();
    expect(dog2.type).toBe(AnimalType.dog);
    expect(dog2.breed).toBe("Appenzell Mountain Dog");
    expect(dog2.color).toBe("Chocolate Merle");

    const cat = AnimalEntityBuilder.create().aCat().build();
    expect(cat.type).toBe(AnimalType.cat);
    expect(cat.breed).toBe("Domestic Short Hair");
    expect(cat.color).toBe("Red Tabby");

    const cat2 = AnimalEntityBuilder.create()
      .aCat()
      .withDifferentBreed("Persa")
      .withDifferentColor("Black")
      .build();
    expect(cat2.type).toBe(AnimalType.cat);
    expect(cat2.breed).toBe("Persa");
    expect(cat2.color).toBe("Black");
  });

  it("should have valid gender", () => {
    expect(AnimalEntityBuilder.create().build().gender).toBe(
      AnimalGender.female
    );

    expect(AnimalEntityBuilder.create().asMale().build().gender).toBe(
      AnimalGender.male
    );
  });
});

export {};
