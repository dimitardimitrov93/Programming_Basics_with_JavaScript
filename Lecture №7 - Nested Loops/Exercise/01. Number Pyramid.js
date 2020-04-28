function solve(input) {
  let number = Number(input[0]);

  let counter = 1;
  let flag = false;

  for (let rows = 1; rows <= number; rows++) {
    let printLine = "";
    for (let cols = 1; cols <= rows; cols++) {
      if (counter > number) {
        flag = true;
        break;
      }
      
      printLine += `${counter} `;
      counter++;
    }

    console.log(printLine);

    if (flag) {
      break;
    }
  }
}

// solve([ '7' ]);
solve(["10"]);
