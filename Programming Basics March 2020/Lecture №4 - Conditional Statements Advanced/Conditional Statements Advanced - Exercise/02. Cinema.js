function solve(type, rows, columns) {
  rows = Number(rows);
  columns = Number(columns);
  let ticketPrice = 0.0;
  let takenSpots = rows * columns;

  switch (type) {
    case "Premiere":
      ticketPrice = 12;
      break;
    case "Normal":
      ticketPrice = 7.5;
      break;
    case "Discount":
      ticketPrice = 5;
      break;
  }

  let totalIncome = takenSpots * ticketPrice;
  console.log(`${totalIncome.toFixed(2)} leva`);
}

solve("Normal", 21, 13);
