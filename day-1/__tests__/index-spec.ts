import * as index from "../src/index";

describe("Day 2", () => {
  test("Examples", () => {
    const examples = [
      [[1, -1], 0],
      [[3, 3, 4, -2, -4], 10],
      [[-6, +3, +8, +5, -6], 5],
      [[+7, +7, -2, -7, -4], 14]
    ];

    examples.forEach(([input, output]) => {
      expect(index.findFirstDuplicate(input as number[])).toEqual(output);
    });
  });
});
