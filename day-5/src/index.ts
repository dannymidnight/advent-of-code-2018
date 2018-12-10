import { readFileSync } from "fs";
import reduce from "./reduce";

function input() {
  return readFileSync("input", { encoding: "utf-8" }).trim();
}

const output = reduce(input());
console.log("Day 5 – Part 1:", output.length);
