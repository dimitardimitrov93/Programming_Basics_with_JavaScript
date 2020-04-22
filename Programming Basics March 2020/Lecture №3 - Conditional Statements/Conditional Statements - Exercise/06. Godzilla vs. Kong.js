function solve(budget, extras, clothingPriceForAnExtra) {
  budget = Number(budget);
  extras = Number(extras);
  clothingPriceForAnExtra = Number(clothingPriceForAnExtra);

  let decoration = budget * 0.1;
  let totalPriceOfClothes = extras * clothingPriceForAnExtra;
  let action = "";
  let message = "";

  if (extras > 150) {
    totalPriceOfClothes = totalPriceOfClothes - totalPriceOfClothes * 0.1;
  }

  let expenses = decoration + totalPriceOfClothes;

  if (expenses > budget) {
    let neededMoney = expenses - budget;
    action = `Not enough money!`;
    message = `Wingard needs ${neededMoney.toFixed(2)} leva more.`;
  } else {
    let moneyLeft = budget - expenses;
    action = `Action!`;
    message = `Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`;
  }

  console.log(action);
  console.log(message);
}

solve(9587.88, 222, 55.68);
