function solve() {
  let sum = 0;
  let currentNumber = 0;
  let currentMaxNumber = 0;

  for (let i = 1; i < arguments.length; i++) {
    currentNumber = arguments[i];

    if (currentNumber >= currentMaxNumber) {
      currentMaxNumber = currentNumber;
    }
  }

  for (let i = 1; i < arguments.length; i++) {
    sum += arguments[i];
  }

  sum -= currentMaxNumber;
  let difference = Math.abs(sum - currentMaxNumber);

  if (currentMaxNumber == sum) {
    console.log(`Yes, sum = ${sum}`);
  } else {
    console.log(`No, diff = ${difference}`);
  }
}

solve(7, 3, 4, 1, 1, 2, 12, 1);
solve(4, 6, 1, 2, 3);
solve(3, 1, 1, 10);
