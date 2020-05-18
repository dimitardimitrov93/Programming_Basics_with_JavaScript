function solve(input) {
  let firstNum = Number(input.shift());
  let secondNum = Number(input.shift());
  let thirdNum = Number(input.shift());

  let printLine = "";
  let firstDigit = 0;
  let secondDigit = 0;
  let thirdDigit = 0;

  for (let i = 1; i <= firstNum; i++) {
    if (i % 2 == 0) {
      firstDigit = i;
      for (let j = 2; j <= secondNum; j++) {
        for (let l = 1; l <= thirdNum; l++) {
          if (l % 2 == 0) {
            thirdDigit = l;
            if (j == 2 || j == 3 || j == 5 || j == 7) {
              secondDigit = j;
              console.log(`${firstDigit} ${secondDigit} ${thirdDigit}`);
            }
          }
        }
      }
    }
  }
}

solve(["3", "5", "5", ""]);
