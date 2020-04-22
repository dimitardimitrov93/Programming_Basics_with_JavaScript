function solve(inputBudget, season) {
  let budget = Number(inputBudget);
  let expenses = 0.0;
  let vacationType = 0.0;
  let destination = "";

  if (budget <= 100) {
    destination = "Bulgaria";

    if (season == "summer") {
      vacationType = "Camp";
      expenses = budget * 0.3;
    } else if (season == "winter") {
      vacationType = "Hotel";
      expenses = budget * 0.7;
    }
  } else if (budget <= 1000 && budget > 100) {
    destination = "Balkans";

    if (season == "summer") {
      vacationType = "Camp";
      expenses = budget * 0.4;
    } else if (season == "winter") {
      vacationType = "Hotel";
      expenses = budget * 0.8;
    }
  } else {
    destination = "Europe";
    vacationType = "Hotel";
    expenses = budget * 0.9;
  }

  console.log(`Somewhere in ${destination}`);
  console.log(`${vacationType} - ${expenses.toFixed(2)}`);
}

solve(1500, "summer");
