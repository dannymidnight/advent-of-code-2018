import { createMap, findOverlaps } from "../src/index";

describe("Day 3", () => {
  test("Draw fabric map", () => {
    const input = ["#1 @ 1,3: 4x4", "#2 @ 3,1: 4x4", "#3 @ 5,5: 2x2"];
    const expected = [
      "........",
      "...2222.",
      "...2222.",
      ".11XX22.",
      ".11XX22.",
      ".111133.",
      ".111133.",
      "........"
    ].join("\n");

    const output = createMap(8, input);

    expect(output).toEqual(expected);
    expect(findOverlaps(output)).toEqual(4);
  });
});
