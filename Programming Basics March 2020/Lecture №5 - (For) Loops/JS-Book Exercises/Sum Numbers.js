function sumNumbers() {
  let sum = 0;

  for (let i = 1; i < arguments.length; i++) {
    sum += arguments[i];
  }

  console.log(sum);
}

sumNumbers(4, 45, -20, 7, 11);
