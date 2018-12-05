import { readFileSync } from "fs";

function input() {
  return readFileSync("input", { encoding: "utf-8" })
    .trim()
    .split("\n");
}

function toString(map: string[][]): string {
  const out = [];
  for (const row of map) {
    out.push(row.join(""));
  }
  return out.join("\n");
}

export function findOverlaps(map: string) {
  const count = map.split("").filter(c => c === "X").length;
  return count;
}

export function createMap(size: number, input: string[]) {
  let map: string[][] = [];

  // Initialise map
  for (let i = 0; i < size; i++) {
    map[i] = [];
    for (let j = 0; j < size; j++) {
      map[i][j] = ".";
    }
  }

  for (const raw of input) {
    const [, id, xRaw, yRaw, width, height] = raw.match(
      /#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/
    )!;
    const x = parseInt(xRaw, 0);
    const y = parseInt(yRaw, 0);

    for (let col = x; col < x + parseInt(width, 0); col++) {
      for (let row = y; row < y + parseInt(height, 0); row++) {
        const current = map[row][col];

        if (current === ".") {
          map[row][col] = id;
        } else {
          map[row][col] = "X";
        }
      }
    }
  }

  return toString(map);
}

const overlaps = findOverlaps(createMap(1000, input()));
console.log(`Day 3 - Part 1: ${overlaps}`);
