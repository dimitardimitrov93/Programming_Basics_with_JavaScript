function solve(input) {
  let inputLetter = input.shift();

  let counterLetterC = 0;
  let counterLetterN = 0;
  let counterLetterO = 0;

  let latinLetters = /[a-zA-Z]/;

  let currentWord = "";
  let finalWord = "";

  while (inputLetter != "End") {
    if (inputLetter.match(latinLetters)) {
      if (inputLetter == "c") {
        counterLetterC++;
      } else if (inputLetter == "n") {
        counterLetterN++;
      } else if (inputLetter == "o") {
        counterLetterO++;
      }

      if ((inputLetter != "c") && (inputLetter != "n") && (inputLetter != "o")) {
        currentWord += inputLetter;
      }

      if (inputLetter == "c" && counterLetterC > 1) {
        currentWord += inputLetter;
      } else if (inputLetter == "n" && counterLetterN > 1) {
        currentWord += inputLetter;
      } else if (inputLetter == "o" && counterLetterO > 1) {
        currentWord += inputLetter;
      } else {
        currentWord = currentWord;
      }

      if ((counterLetterC >= 1) && (counterLetterN >= 1) && (counterLetterO >= 1)) {
        finalWord += currentWord + " ";
        currentWord = "";
        counterLetterC = 0;
        counterLetterN = 0;
        counterLetterO = 0;
      }
    }

    inputLetter = input.shift();
  }

  console.log(finalWord);
}

solve([
  "H",
  "n",
  "e",
  "l",
  "l",
  "o",
  "o",
  "c",
  "t",
  "c",
  "h",
  "o",
  "e",
  "r",
  "e",
  "n",
  "e",
  "End",
]);
solve([
  "%",
  "!",
  "c",
  "^",
  "B",
  "`",
  "o",
  "%",
  "o",
  "o",
  "M",
  ")",
  "{",
  "n",
  "\\",
  "A",
  "D",
  "End",
]);

solve([
  "o",
  "S",
  "%",
  "o",
  "l",
  "^",
  "v",
  "e",
  "c",
  "n",
  "&",
  "m",
  "e",
  "c",
  "o",
  "n",
  "End",
]);
