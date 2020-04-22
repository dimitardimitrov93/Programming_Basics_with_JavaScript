function solve(startInput, endInput, dividerInput) {
  let start = Number(startInput);
  let end = Number(endInput);
  let divider = Number(dividerInput);
  let sum = 0;

  for (let i = start; i <= end; i++) {
    if (i % divider == 0) {
      sum += i;
    }
  }
  console.log(sum);
}

solve(10, 30, 7);
