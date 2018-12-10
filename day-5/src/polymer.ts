export function reduce(polymer: string) {
  let result = polymer
    .split("")
    .reduce<string[]>((acc, next, idx) => {
      const [last] = acc.slice(acc.length - 1, acc.length);

      if (!last) {
        acc.push(next);
        return acc;
      }

      if ((last as string).toLowerCase() === next.toLowerCase()) {
        // If the're not the same casing then destroy both items (current and previous)
        if (last !== next) {
          acc.pop();
          return acc;
        }
      }

      acc.push(next);
      return acc;
    }, [])
    .join("");

  if (result.length !== polymer.length) {
    result = reduce(result);
  }
  return result;
}

export function findShortestLength(polymer: string) {
  const uniqueTypes = new Set(polymer.split("").map(a => a.toLowerCase()));

  const lengths = Array.from(uniqueTypes)
    .map(t => {
      const reg = new RegExp(`[${t}${t.toUpperCase()}]`, "g");
      const withTypeRemoved = polymer.replace(reg, "");

      return reduce(withTypeRemoved).length;
    })
    .sort((a, b) => a - b);

  return lengths[0];
}
