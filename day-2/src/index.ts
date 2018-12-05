import { readFileSync } from "fs";
import checksum from "./checksum";
import findCommonLetters from "./findCommonLetters";

function input() {
  return readFileSync("input", { encoding: "utf-8" })
    .trim()
    .split("\n");
}

const ids = input();
console.log("Checksum: ", checksum(ids));
console.log("Common letters: ", findCommonLetters(ids));
