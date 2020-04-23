function solve(input) {
  let budget = Number(input.shift());
  let nightsToStay = Number(input.shift());
  let priceForNight = Number(input.shift());
  let additionalExpensesPercent = Number(input.shift()) / 100;

  let totalPriceForStay = 0;
  let totalExpenses = 0;
  let difference = 0;

  let additionalExpenses = additionalExpensesPercent * budget;

  if (nightsToStay > 7) {
    priceForNight = priceForNight - priceForNight * 0.05;
  } else {
    priceForNight = priceForNight;
  }

  totalPriceForStay = nightsToStay * priceForNight;
  totalExpenses = totalPriceForStay + additionalExpenses;

  difference = Math.abs(budget - totalExpenses);

  if (totalExpenses <= budget) {
    console.log(
      `Ivanovi will be left with ${difference.toFixed(2)} leva after vacation.`
    );
  } else {
    console.log(`${difference.toFixed(2)} leva needed.`);
  }
}

solve(["800.50", "8", "100", "2"]);
solve(["500", "7", "66", "15"]);
