import reduce from "../src/reduce";

describe("Day 5", () => {
  test("examples", () => {
    const polymer = "dabAcCaCBAcCcaDA";
    expect(reduce(polymer)).toEqual("dabCBAcaDA");
  });
});
