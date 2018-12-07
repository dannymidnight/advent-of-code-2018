import * as map from "../src/map";

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

    const output = map.fill(map.create(8), input);
    const str = map.toString(output);

    expect(str).toEqual(expected);
    expect(map.findOverlaps(output)).toEqual(4);
  });

  test("find unique tile", () => {
    const input = ["#1 @ 1,3: 4x4", "#2 @ 3,1: 4x4", "#3 @ 5,5: 2x2"];

    const m = map.fill(map.create(8), input);
    const id = map.findIntactClaim(input, m);

    expect(id).toEqual(3);
  });
});
