function solve(inputBudget, season, inputNumOfFisherman) {
  let budget = Number(inputBudget);
  let numberOfFisherman = Number(inputNumOfFisherman);

  let shipRent = 0.0;
  let discount = 0.0;
  let addDiscount = 0.0;
  let totalPrice = 0.0;
  let difference = 0.0;

  if (season == "Spring") {
    shipRent = 3000;
  } else if (season == "Summer" || season == "Autumn") {
    shipRent = 4200;
  } else if (season == "Winter") {
    shipRent = 2600;
  }

  if (numberOfFisherman <= 6) {
    discount = shipRent * 0.1;
  } else if (numberOfFisherman >= 7 && numberOfFisherman <= 11) {
    discount = shipRent * 0.15;
  } else if (numberOfFisherman >= 12) {
    discount = shipRent * 0.25;
  }

  totalPrice = shipRent - discount;

  if (numberOfFisherman % 2 == 0 && season != "Autumn") {
    addDiscount = (shipRent - discount) * 0.05;
    totalPrice = shipRent - discount - addDiscount;
  }

  difference = Math.abs(budget - totalPrice).toFixed(2);

  if (totalPrice <= budget) {
    console.log(`Yes! You have ${difference} leva left.`);
  } else {
    console.log(`Not enough money! You need ${difference} leva.`);
  }
}

solve(2000, "Winter", 13);
