function solve(input) {
  let unsatisfactoryAssessmentNum = Number(input.shift());
  let taskName = input.shift();
  let gradeForCurrentTask = Number(input.shift());
  let poorMarks = 0;
  let sumFromGrades = 0;
  let averageScore = 0;
  let marksNum = 0;
  let lastProblem = "";

  while (taskName != "Enough" && poorMarks < unsatisfactoryAssessmentNum) {
    sumFromGrades += gradeForCurrentTask;

    if (gradeForCurrentTask <= 4) {
      poorMarks++;
    }

    taskName = input.shift();
    gradeForCurrentTask = Number(input.shift());
    marksNum++;

    if (taskName != "Enough") {
      lastProblem = taskName;
    }
  }

  averageScore = (sumFromGrades / marksNum).toFixed(2);

  if (taskName == "Enough") {
    console.log(`Average score: ${averageScore}`);
    console.log(`Number of problems: ${marksNum}`);
    console.log(`Last problem: ${lastProblem}`);
  } else {
    console.log(
      `You need a break, ${unsatisfactoryAssessmentNum} poor grades.`
    );
  }
}

solve([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
