function solve(firstNumber, secondNumber) {
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);

  if (firstNumber > secondNumber) {
    console.log(`${firstNumber}`);
  }

  if (secondNumber > firstNumber) {
    console.log(`${secondNumber}`);
  }
}

solve(5, 3);