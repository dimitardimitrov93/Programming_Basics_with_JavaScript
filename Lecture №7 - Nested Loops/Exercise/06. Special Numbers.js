function solve(input) {
  let number = Number(input.shift());

  let printLine = "";

  let specialNum = 0;
  let currentNum = 0;

  for (let i = 1111; i <= 9999; i++) {
    i = i.toString();
    let counter = i.length;
    let innerCounter = 0;
    for (let j = 0; j < counter; j++) {
      currentNum = Number(i[j]);
      if (number % currentNum == 0) {
        specialNum = currentNum;
        innerCounter++;
      }

      if (innerCounter == counter) {
        printLine += `${i} `;
      }
    }
  }

  console.log(printLine);
}

solve(["3"]);
// solve([ '11' ]);
