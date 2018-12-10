import { readFileSync } from "fs";
import {
  findMostCommonMinuteForId,
  findMostMinutesID,
  transform,
  findMostFrequentAsleepOnMinute
} from "./findMostMinutes";

function input() {
  return readFileSync("input", { encoding: "utf-8" })
    .trim()
    .split("\n");
}

const records = transform(input());
const id = findMostMinutesID(records);
const [minute] = findMostCommonMinuteForId(id, records);
console.log("Day 4 - Part 1:", id * minute);

const partTwo = findMostFrequentAsleepOnMinute(records);
console.log(partTwo[0]);
console.log("Day 4 - Part 2:", partTwo[0] * partTwo[1]);
