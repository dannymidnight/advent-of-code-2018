import * as index from "../src/index";

describe("Day 2", () => {
  test("Checksum", () => {
    const input = [
      "abcdef",
      "bababc",
      "abbcde",
      "abcccd",
      "aabcdd",
      "abcdee",
      "ababab"
    ];

    expect(index.checksum(input)).toEqual(12);
  });
});
