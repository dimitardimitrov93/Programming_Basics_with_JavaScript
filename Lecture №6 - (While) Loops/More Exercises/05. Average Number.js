function solve(input) {
  let counter = Number(input.shift());
  let currentNum = Number(input.shift());
  let sum = 0;
  let average = 0;
  for (let i = 0; i < counter; i++) {
    sum += currentNum;

    currentNum = Number(input.shift());
  }

  average = sum / counter;
  console.log(average.toFixed(2));
}

solve(["4", "3", "2", "4", "2"]);
solve(["2", "6", "4"]);