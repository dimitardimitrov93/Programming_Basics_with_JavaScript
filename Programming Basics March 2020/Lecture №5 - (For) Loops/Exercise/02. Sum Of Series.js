function solve(numberInput) {
  let number = Number(numberInput);
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    sum += i * i;
  }
  console.log(sum);
}

solve(7);
