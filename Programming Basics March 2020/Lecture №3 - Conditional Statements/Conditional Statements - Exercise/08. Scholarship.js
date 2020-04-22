function solve(income, grade, minimalWorkingSalary) {
  income = Number(income);
  grade = Number(grade);
  minimalWorkingSalary = Number(minimalWorkingSalary);

  let socialScholarship = "";
  let gradeScholarship = "";
  let message = "";

  if (income < minimalWorkingSalary && grade >= 4.5 && grade < 5.5) {
    socialScholarship = minimalWorkingSalary * 0.35;
    message = `You get a Social scholarship ${Math.floor(
      socialScholarship
    )} BGN`;
  } else if (grade >= 5.5) {
    gradeScholarship = grade * 25;
    message = `You get a scholarship for excellent results ${Math.floor(
      gradeScholarship
    )} BGN`;
  } else {
    message = `You cannot get a scholarship!`;
  }

  console.log(message);
}

solve(300.0, 5.65, 420.0);
