function solve(input) {
  let juryNum = Number(input.shift());
  let command = input.shift();
  let finalAssessment = 0;
  let presentationCounter = 0;

  while (command != "Finish") {
    let presentationName = command;

    let averageGrade = 0;
    let sum = 0;

    for (let i = 0; i < juryNum; i++) {
      let grade = Number(input.shift());
      sum += grade;
    }

    averageGrade = sum / juryNum;
    finalAssessment += averageGrade;

    console.log(`${presentationName} - ${averageGrade.toFixed(2)}.`);

    presentationCounter++;

    command = input.shift();
  }

  console.log(`Student's final assessment is ${(finalAssessment / presentationCounter).toFixed(2)}.`);
}

solve([
  "2",
  "While-Loop",
  "6.00",
  "5.50",
  "For-Loop",
  "5.84",
  "5.66",
  "Finish",
]);
// solve([
//   '3',    'Arrays',
//   '4.53', '5.23',
//   '5.00', 'Lists',
//   '5.83', '6.00',
//   '5.42', 'Finish'
// ]);
