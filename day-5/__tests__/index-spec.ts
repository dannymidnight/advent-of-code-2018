import { reduce, findShortestLength } from "../src/polymer";

describe("Day 5", () => {
  test("examples", () => {
    const polymer = "dabAcCaCBAcCcaDA";
    expect(reduce(polymer)).toEqual("dabCBAcaDA");

    expect(findShortestLength(polymer)).toEqual(4);
  });
});
