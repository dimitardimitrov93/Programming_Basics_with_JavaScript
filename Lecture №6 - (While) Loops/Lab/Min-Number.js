function solve(input) {
  let count = Number(input.shift());
  let minNumber = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i <= count; i++) {
    let currentNumber = Number(input.shift());

    if (currentNumber < minNumber) {
      minNumber = currentNumber;
    }
  }
  console.log(minNumber);
}

solve(["2", "100", "99"]);
solve(["3", "-10", "20", "-30"]);
