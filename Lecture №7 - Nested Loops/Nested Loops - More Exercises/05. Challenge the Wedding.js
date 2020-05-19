function solve(input) {
  let maleClientsNum = Number(input.shift());
  let femaleClientsNum = Number(input.shift());
  let availableTablesNum = Number(input.shift());

  let availableSeatsNum = availableTablesNum * 2;

  let printLine = "";
  let counter = 0;

  let flag = false;

  for (let i = 1; i <= maleClientsNum; i++) {
    for (let j = 1; j <= femaleClientsNum; j++) {
      if (counter >= availableSeatsNum) {
        flag = true;
        break;
      }
      printLine += `(${i} <-> ${j}) `;
      counter += 2;
    }
    if (flag) {
        break;
      }
  }
  console.log(printLine);
}

solve(["2", "2", "3", ""]);
