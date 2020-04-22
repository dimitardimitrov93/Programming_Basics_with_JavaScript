function solve(input) {
  let studentsNum = Number(input.shift());
  let currentGrade = Number(input.shift());

  let gradeSum = 0;
  let averageGrade = 0;

  let poorMarks = 0;
  let sufficientMarks = 0;
  let goodMarks = 0;
  let topStudents = 0;

  let poorMarksPercent = 0;
  let sufficientMarksPercent = 0;
  let goodMarksPercent = 0;
  let topStudentsPercent = 0;

  for (let i = 0; i < studentsNum; i++) {
    if (currentGrade >= 2 && currentGrade <= 2.99) {
      poorMarks++;
    } else if (currentGrade >= 3 && currentGrade <= 3.99) {
      sufficientMarks++;
    } else if (currentGrade >= 4 && currentGrade <= 4.99) {
      goodMarks++;
    } else if (currentGrade >= 5) {
      topStudents++;
    }

    gradeSum += currentGrade;
    currentGrade = Number(input.shift());
  }

  averageGrade = (gradeSum / studentsNum).toFixed(2);

  poorMarksPercent = ((poorMarks / studentsNum) * 100).toFixed(2);
  sufficientMarksPercent = ((sufficientMarks / studentsNum) * 100).toFixed(2);
  goodMarksPercent = ((goodMarks / studentsNum) * 100).toFixed(2);
  topStudentsPercent = ((topStudents / studentsNum) * 100).toFixed(2);

  console.log(`Top students: ${topStudentsPercent}%`);
  console.log(`Between 4.00 and 4.99: ${goodMarksPercent}%`);
  console.log(`Between 3.00 and 3.99: ${sufficientMarksPercent}%`);
  console.log(`Fail: ${poorMarksPercent}%`);
  console.log(`Average: ${averageGrade}`);
}

solve([
  "10",
  "3",
  "2.99",
  "5.68",
  "3.01",
  "4",
  "4",
  "6",
  "4.5",
  "2.44",
  "5",
  "",
]);
