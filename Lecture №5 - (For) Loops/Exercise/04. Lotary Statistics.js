function solve(maxNumberInput) {
  let maxNumber = Number(maxNumberInput);
  let oneDigitOddNumbers = 0;
  let evenNumbers = 0;
  let numbersEndingInSeven = 0;
  let numbersThatDivideInHundred = 0;

  for (let i = 1; i <= maxNumber; i++) {
    if (i % 2 > 0 && i < 10) {
      oneDigitOddNumbers += 1;
    }

    if (i % 2 == 0) {
      evenNumbers += 1;
    }

    if (i % 10 == 7) {
      numbersEndingInSeven += 1;
    }

    if (100 % i == 0) {
      numbersThatDivideInHundred += 1;
    }
  }

  let percentOneDigitOddNumbers = (
    (oneDigitOddNumbers / maxNumber) *
    100
  ).toFixed(2);
  console.log(`${percentOneDigitOddNumbers}%`);

  let percentEvenNumbers = ((evenNumbers / maxNumber) * 100).toFixed(2);
  console.log(`${percentEvenNumbers}%`);

  let percentNumbersEndingInSeven = (
    (numbersEndingInSeven / maxNumber) *
    100
  ).toFixed(2);
  console.log(`${percentNumbersEndingInSeven}%`);

  let percentNumbersThatDivideInHundred = (
    (numbersThatDivideInHundred / maxNumber) *
    100
  ).toFixed(2);
  console.log(`${percentNumbersThatDivideInHundred}%`);
}

solve(49);
