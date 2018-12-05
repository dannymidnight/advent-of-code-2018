export default function checksum(input: string[]) {
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

  return twos * threes;
}
