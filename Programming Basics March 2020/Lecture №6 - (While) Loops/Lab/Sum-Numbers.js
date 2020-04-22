function solve(input) {
  let inputElement = input.shift();
  let sum = 0;

  while (inputElement != "Stop") {
    let number = Number(inputElement);
    sum += number;

    inputElement = input.shift();
  }

  console.log(sum);
}

solve(["10", "20", "30", "45", "Stop"]);
