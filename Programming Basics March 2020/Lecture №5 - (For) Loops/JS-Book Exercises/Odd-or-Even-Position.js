function solve() {
  let currentNumber = 0;
  let number = 0;
  let oddSum = 0;
  let currentOddMin = 0;
  let oddMin = Number.NEGATIVE_INFINITY;
  let oddMax = Number.NEGATIVE_INFINITY;
  let evenSum = 0;
  let currentEvenMin = Number.NEGATIVE_INFINITY;
  let evenMin = Number.NEGATIVE_INFINITY;
  let evenMax = Number.NEGATIVE_INFINITY;

  for (let i = 1; i < arguments.length; i++) {
    currentNumber = i;
    number = arguments[i];
    if (currentNumber % 2 == 0) {
      evenSum += number;
      currentEvenMin = arguments[i];
      if (number > evenMax) {
        evenMax = number;
      }

      if (number <= evenMax) {
        evenMin = number;
      }
    }

    if (currentNumber % 2 != 0) {
      oddSum += number;
      currentOddMin = arguments[i];
      if (number > oddMax) {
        oddMax = number;
      }

      if (number <= oddMax) {
        oddMin = number;
      }
    }
  }

  if (oddSum != 0) {
    console.log(`OddSum = ${oddSum}`);
    console.log(`OddMin = ${oddMin}`);
    console.log(`OddMax = ${oddMax}`);
  } else {
    console.log(`OddSum = ${oddSum}`);
    console.log(`OddMin = No`);
    console.log(`OddMax = No`);
  }

  if (evenSum != 0) {
    console.log(`EvenSum = ${evenSum}`);
    console.log(`EvenMin = ${evenMin}`);
    console.log(`EvenMax = ${evenMax}`);
  } else {
    console.log(`EvenSum = ${evenSum}`);
    console.log(`EvenMin = No`);
    console.log(`EvenMax = No`);
  }
}

solve(1, 1);
