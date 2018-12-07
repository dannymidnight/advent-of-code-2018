import { readFileSync } from "fs";
import * as map from "./map";

function input() {
  return readFileSync("input", { encoding: "utf-8" })
    .trim()
    .split("\n");
}

const claims = input();
const m = map.fill(map.create(1000), claims);

const overlaps = map.findOverlaps(m);
console.log(`Day 3 - Part 1: ${overlaps}`);

const id = map.findIntactClaim(claims, m);
console.log(`Day 3 - Part 2: ${id}`);
