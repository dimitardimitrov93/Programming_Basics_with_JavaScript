function solve(input) {
  let count = Number(input.shift());
  let maxNumber = Number.MIN_SAFE_INTEGER;

  for (let i = 1; i <= count; i++) {
    let currentNumber = Number(input.shift());

    if (currentNumber > maxNumber) {
      maxNumber = currentNumber;
    }
  }
  console.log(maxNumber);
}

solve(["2", "100", "99"]);
solve(["3", "-10", "20", "-30"]);
