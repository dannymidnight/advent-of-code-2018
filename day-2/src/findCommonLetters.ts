export default function findCommonLetters(input: string[]) {
  let commonLetters = "";

  for (let i = 0; i < input.length; i++) {
    const currentId = input[i].split("");

    for (let j = i + 1; j < input.length; j++) {
      const comparisonId = input[j].split("");

      // console.log(`Comparing ${input[i]} -> ${input[j]}`);

      // Find differences and keep track of the letter index.
      const differences: number[] = [];
      for (let letterIdx = 0; letterIdx < currentId.length; letterIdx++) {
        const currentLetter = currentId[letterIdx];
        const comparisonLetter = comparisonId[letterIdx];

        if (currentLetter !== comparisonLetter) {
          differences.push(letterIdx);
        }
      }

      if (differences.length === 1) {
        const [idx] = differences;

        // Remove difference
        currentId.splice(idx, 1);
        commonLetters = currentId.join("");
      }
    }
  }

  return commonLetters;
}
