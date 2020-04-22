function solve(input) {
  let stundentName = input.shift();
  let counter = 12;
  let currentCount = 1;
  let sum = 0;
  let currentMark = 0;

  while (currentCount <= counter) {
    currentMark = Number(input.shift());
    if (currentMark >= 4) {
      currentCount++;
      sum += currentMark;
    }
  }

  let finalMark = sum / 12;

  console.log(
    `${stundentName} graduated. Average grade: ${finalMark.toFixed(2)}`
  );
}

solve([
  "Victor",
  "4",
  "5.5",
  "6",
  "5.43",
  "4.5",
  "6",
  "5.55",
  "5",
  "6",
  "6",
  "5.43",
  "5",
  "6",
]);
solve([
  "Ani",
  "5",
  "5.32",
  "6",
  "5.43",
  "5",
  "6",
  "5.5",
  "4.55",
  "5",
  "6",
  "5.56",
  "6",
  "5",
]);
