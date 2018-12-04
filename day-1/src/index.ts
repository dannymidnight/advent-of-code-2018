import { readFileSync } from "fs";

const input = readFileSync("input", { encoding: "utf-8" });

const output = input
  .trim()
  .split("\n")
  .reduce((frequency, next) => {
    return frequency + parseInt(next, 0);
  }, 0);

console.log("Frequency: %d", output);
