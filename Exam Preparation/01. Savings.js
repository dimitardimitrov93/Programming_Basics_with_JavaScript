function solve(input) {
  let monthlyIncome = Number(input.shift());
  let months = Number(input.shift());
  let personalExpenses = Number(input.shift());

  let unexpectedExpenses = 0.3 * monthlyIncome;
  let monthlySavings = monthlyIncome - (personalExpenses + unexpectedExpenses);

  let totalSavings = monthlySavings * months;
  let savingsPercent = (monthlySavings / monthlyIncome) * 100;

  console.log(`She can save ${savingsPercent.toFixed(2)}%`);
  console.log(totalSavings.toFixed(2));
}

// solve(["1500", "3", "800"]);
solve([ '2050', '5', '900' ]);
