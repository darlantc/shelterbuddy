import { generateRandomInteger } from "./utils";

describe("generateRandomInteger", () => {
  it("should generate integer without parameters", () => {
    expect(generateRandomInteger()).toEqual(expect.any(Number));
    expect(generateRandomInteger()).toEqual(expect.any(Number));
  });

  it("should generate integer greater than or equal min parameter", () => {
    expect(generateRandomInteger({ min: 999 })).toBeGreaterThanOrEqual(999);

    expect(generateRandomInteger({ min: 100000 })).toBeGreaterThanOrEqual(
      100000
    );
  });

  it("should generate integer less than or equal min parameter", () => {
    expect(generateRandomInteger({ max: 999 })).toBeLessThanOrEqual(999);

    expect(generateRandomInteger({ max: 100000 })).toBeLessThanOrEqual(100000);
  });

  it("should generate integer between or equal min and max", () => {
    const random1 = generateRandomInteger({ min: 1, max: 1000 });
    expect(random1).toBeGreaterThanOrEqual(1);
    expect(random1).toBeLessThanOrEqual(1000);

    const random2 = generateRandomInteger({ min: 999, max: 123456789 });
    expect(random2).toBeGreaterThanOrEqual(999);
    expect(random2).toBeLessThanOrEqual(123456789);

    expect(generateRandomInteger({ min: 10, max: 10 })).toBe(10);
    expect(generateRandomInteger({ min: 9999, max: 9999 })).toBe(9999);
  });

  it("should throw if min is greater than max", () => {
    expect(() => generateRandomInteger({ min: 1000, max: 10 })).toThrow(
      TypeError
    );

    expect(() => generateRandomInteger({ min: 9999, max: 1000 })).toThrow(
      TypeError
    );
  });
});

export {};
