function solve(input) {
  let number = input.shift();

  let primeNumbersSum = 0;
  let nonPrimeNumbersSum = 0;

  while (number != "stop") {
    number = Number(number);
    let prime = true;

    if (number < 0) {
      console.log(`Number is negative.`);
      number = input.shift();
      continue;
    }

    if (number >= 0) {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          prime = false;
          break;
        }
      }
      if (prime && number >= 2) {
        primeNumbersSum += number;
      } else {
        nonPrimeNumbersSum += number;
      }
    }

    number = input.shift();
  }

  console.log(`Sum of all prime numbers is: ${primeNumbersSum}`);
  console.log(`Sum of all non prime numbers is: ${nonPrimeNumbersSum}`);
}

solve(["3", "9", "0", "7", "19", "4", "stop"]);
// solve(["30", "83", "33", "-1", "20", "stop"]);
// solve([ '0', '-9', '0', 'stop' ]);
