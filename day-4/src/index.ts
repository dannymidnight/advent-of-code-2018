import { readFileSync } from "fs";
import {
  findMostCommonMinuteForId,
  findMostMinutesID,
  transform
} from "./findMostMinutes";

function input() {
  return readFileSync("input", { encoding: "utf-8" })
    .trim()
    .split("\n");
}

const records = transform(input());
const id = findMostMinutesID(records);
const minute = findMostCommonMinuteForId(id, records);

console.log("ID:", id);
console.log("Minute:", minute);

console.log("Day 4 - Part 1:", id * minute);
