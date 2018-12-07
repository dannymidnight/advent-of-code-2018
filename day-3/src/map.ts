export function toString(map: string[][]): string {
  const out = [];
  for (const row of map) {
    out.push(row.join(""));
  }
  return out.join("\n");
}

export function findOverlaps(map: string[][]): number {
  return toString(map)
    .split("")
    .filter(c => c === "X").length;
}

export function create(size: number): string[][] {
  return new Array(size).fill(null).map(() => new Array(size).fill("."));
}

export function fill(map: string[][], input: string[]) {
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

  return map;
}

export function findIntactClaim(input: string[], map: string[][]): number {
  for (const raw of input) {
    const [, id, xRaw, yRaw, widthRaw, heightRaw] = raw.match(
      /#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/
    )!;

    const x = parseInt(xRaw, 0);
    const y = parseInt(yRaw, 0);
    const width = parseInt(widthRaw, 0);
    const height = parseInt(heightRaw, 0);

    let intact = 0;

    for (let row = y; row < y + height; row++) {
      for (let col = x; col < x + width; col++) {
        const current = map[row][col];

        if (current === id) {
          intact++;
        }
      }
    }

    if (intact === width * height) {
      return parseInt(id, 0);
    }
  }
  return 0;
}
