import checksum from "../src/checksum";
import findCommonLetters from "../src/findCommonLetters";

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

    expect(checksum(input)).toEqual(12);
  });

  test("Find common letters", () => {
    const input = [
      "abcde",
      "fghij",
      "klmno",
      "pqrst",
      "fguij",
      "axcye",
      "wvxyz"
    ];

    expect(findCommonLetters(input)).toEqual("fgij");
  });
});
