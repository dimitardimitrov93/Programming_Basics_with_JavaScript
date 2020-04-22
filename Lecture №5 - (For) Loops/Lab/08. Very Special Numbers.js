function verySpecialNumbers(inputStart, inputEnd, inputNumber) {
  let start = Number(inputStart);
  let end = Number(inputEnd);
  let number = Number(inputNumber);

  for (let i = start; i <= end; i++) {
    if (i % Math.pow(number, 2) == 0) {
      console.log(`Very special number: ${i}`);
    } else if (i % number == 0) {
      console.log(`Special number: ${i}`);
    } else {
      console.log(i);
    }
  }
}

verySpecialNumbers(1, 25, 3);
