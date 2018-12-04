import { readFileSync } from "fs";
import { intersection } from "lodash";
import { stringify } from "querystring";

function input() {
  return readFileSync("input", { encoding: "utf-8" })
    .trim()
    .split("\n");
}

export function checksum(input: string[]) {
  let twos = 0;
  let threes = 0;

  input.map(id => {
    const charCounts: { [key: string]: number } = {};
    const chars = id.split("");

    for (const c of chars) {
      charCounts[c] = (charCounts[c] || 0) + 1;
    }

    const counts = Object.values(charCounts);
    if (counts.includes(2)) {
      twos++;
    }

    if (counts.includes(3)) {
      threes++;
    }
  });

  console.log("2's: ", twos);
  console.log("3's: ", threes);

  return twos * threes;
}

const ids = input();
console.log("Checksum: ", checksum(ids));
