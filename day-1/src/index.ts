import { readFileSync } from "fs";

export function frequencies() {
  const input = readFileSync("input", { encoding: "utf-8" });
  return input
    .trim()
    .split("\n")
    .map(f => parseInt(f, 0));
}

// Day 1.
export function calibrateFrequency(input: number[]) {
  return input.reduce((frequency, next) => frequency + next, 0);
}

// Day 2.
export function findFirstDuplicate(input: number[]) {
  const values = [0];
  let output: number | undefined;

  while (output === undefined) {
    for (const frequency of input) {
      const prev = values[values.length - 1];
      const value = prev + frequency;

      if (values.indexOf(value) !== -1) {
        output = value;
        break;
      }

      values.push(value);
    }
  }

  return output;
}

const input = frequencies();
console.log("Day 1 – Part 1: %d", calibrateFrequency(input));
console.log("Day 1 - Part 2: %d", findFirstDuplicate(input));
