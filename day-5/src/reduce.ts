export default function reduce(polymer: string) {
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
