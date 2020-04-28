function solve(input) {
  let firstNum = input[0];
  let secondNum = input[1];
  let printLine = "";

  for (let i = Number(firstNum); i <= Number(secondNum); i++) {
    let currentNum = i.toString();

    let evenSum = 0;
    let oddSum = 0;
    for (let j = 0; j < currentNum.length; j++) {
      if (j % 2 == 0) {
        evenSum += Number(currentNum[j]);
      } else if (j % 2 != 0) {
        oddSum += Number(currentNum[j]);
      }
    }

    if (evenSum == oddSum) {
      printLine += `${currentNum} `;
    }
  }
  console.log(printLine);
}

solve(["100000", "100050"]);
// solve([ '123456', '124000' ]);
// solve([ '299900', '300000' ]);
// solve([ '100115', '100120' ]);
