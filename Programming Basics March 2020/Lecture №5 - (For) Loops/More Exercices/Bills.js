function solve(input) {
  let monthsNum = Number(input.shift());

  let monthlyElectrictyBill = Number(input.shift());
  let electricitySum = 0;

  let monthlyWaterBill = 20;
  let waterSum = 0;

  let monthlyInternetBill = 15;
  let internetSum = 0;

  let additionalExpenses = 0;
  let additionalExpensesSum = 0;

  let wholeSum = 0;

  let averageExpenses = 0;

  for (let i = 0; i < monthsNum; i++) {
    electricitySum += monthlyElectrictyBill;
    waterSum += monthlyWaterBill;
    internetSum += monthlyInternetBill;

    additionalExpenses =
      monthlyElectrictyBill +
      monthlyWaterBill +
      monthlyInternetBill +
      (monthlyElectrictyBill + monthlyWaterBill + monthlyInternetBill) * 0.2;
    additionalExpensesSum += additionalExpenses;

    monthlyElectrictyBill = Number(input.shift());
  }

  wholeSum = electricitySum + waterSum + internetSum + additionalExpensesSum;
  averageExpenses = (wholeSum / monthsNum).toFixed(2);

  console.log(`Electricity: ${electricitySum.toFixed(2)} lv`);
  console.log(`Water: ${waterSum.toFixed(2)} lv`);
  console.log(`Internet: ${internetSum.toFixed(2)} lv`);
  console.log(`Other: ${additionalExpensesSum.toFixed(2)} lv`);
  console.log(`Average: ${averageExpenses} lv`);
}

solve(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);
