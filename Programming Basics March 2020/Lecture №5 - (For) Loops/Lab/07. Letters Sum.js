function lettersSum(word, inputControlNumber, inputBudget) {
  let controlNumber = Number(inputControlNumber);
  let budget = Number(inputBudget);

  let sum = 0;

  for (let i = 0; i < word.length; i++) {
    switch (word[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
      case "y":
        sum += 3;
        break;
      default:
        sum += 1;
        break;
    }
  }
  let finalSum = sum * controlNumber;
  let difference = Math.abs(finalSum - budget);

  if (finalSum > budget) {
    console.log(`Cannot buy ${word}. Product value: ${finalSum.toFixed(2)}`);
  } else {
    console.log(`${word} bought. Money left: ${difference.toFixed(2)}`);
  }
}

lettersSum("apple", 2, 20);
