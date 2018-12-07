import { readFileSync } from "fs";

function input() {
  return readFileSync("input", { encoding: "utf-8" })
    .trim()
    .split("\n");
}

