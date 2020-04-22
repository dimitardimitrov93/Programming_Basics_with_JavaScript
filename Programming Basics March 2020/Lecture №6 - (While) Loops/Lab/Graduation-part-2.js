function solve(input) {
  let studentName = input.shift();
  let counter = 12;
  let currentCount = 1;
  let sum = 0;
  let currentMark = 0;
  let exclusionCount = 0;

  while (currentCount <= counter) {
    currentMark = Number(input.shift());
    if (currentMark >= 4) {
      currentCount++;
      sum += currentMark;
    } else {
      exclusionCount++;
      exclusionGrade = currentCount;
      if (exclusionCount > 1) {
        break;
      }
    }
  }

  if (exclusionCount < 2) {
    let finalMark = sum / 12;
    console.log(
      `${studentName} graduated. Average grade: ${finalMark.toFixed(2)}`
    );
  } else {
    console.log(`${studentName} has been excluded at ${exclusionGrade} grade`);
  }
}

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
  "6",
  "6",
  "5.56",
  "6",
  "5",
]);

solve([
  "Victor",
  "4",
  "5.5",
  "3",
  "3",
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
