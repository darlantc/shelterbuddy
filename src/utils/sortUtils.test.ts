import { dynamicSortByProperty } from "./sortUtils";

describe("dynamicSortByProperty", () => {
  it("should sort in ascending order", () => {
    expect(
      createPeoplesList().sort(dynamicSortByProperty("name"))
    ).toStrictEqual([alma, billie, charley]);

    expect(
      createPeoplesList().sort(dynamicSortByProperty("age"))
    ).toStrictEqual([charley, alma, billie]);
  });

  it("should sort in descending order", () => {
    expect(
      createPeoplesList().sort(dynamicSortByProperty("name", false))
    ).toStrictEqual([charley, billie, alma]);

    expect(
      createPeoplesList().sort(dynamicSortByProperty("age", false))
    ).toStrictEqual([billie, alma, charley]);
  });
});

// Helpers
const billie = { name: "Billie Choi", age: 60 };
const alma = { name: "Alma Cross", age: 35 };
const charley = { name: "Charley Moore", age: 23 };

const createPeoplesList = () => [billie, alma, charley];

export {};
