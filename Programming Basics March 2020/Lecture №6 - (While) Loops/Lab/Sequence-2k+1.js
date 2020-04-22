function solve(input) {
  let number = Number(input.shift());
  let currentNumber = 1;

  while (currentNumber <= number) {
    console.log(currentNumber);

    currentNumber = (currentNumber * 2) + 1;
  }
}

solve(["1"]);
solve(["3"]);
solve(['7']);
solve(['100']);
