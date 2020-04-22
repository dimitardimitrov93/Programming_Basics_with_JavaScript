function solve(typeOfFlowers, inputNumOfFlowers, inputBudget) {
  let numberOfFlowers = Number(inputNumOfFlowers);
  let budget = Number(inputBudget);

  let singleFlowerPrice = 0.0;
  let discount = 0.0;
  let surcharge = 0.0;
  let totalPrice = 0.0;
  let moneyLeft = 0.0;
  let neededMoney = 0.0;

  if (typeOfFlowers == "Roses") {
    singleFlowerPrice = 5;
  } else if (typeOfFlowers == "Dahlias") {
    singleFlowerPrice = 3.8;
  } else if (typeOfFlowers == "Tulips") {
    singleFlowerPrice = 2.8;
  } else if (typeOfFlowers == "Narcissus") {
    singleFlowerPrice = 3;
  } else if (typeOfFlowers == "Gladiolus") {
    singleFlowerPrice = 2.5;
  }

  if (typeOfFlowers == "Roses" && numberOfFlowers > 80) {
    discount = numberOfFlowers * singleFlowerPrice * 0.1;
  } else if (typeOfFlowers == "Dahlias" && numberOfFlowers > 90) {
    discount = numberOfFlowers * singleFlowerPrice * 0.15;
  } else if (typeOfFlowers == "Tulips" && numberOfFlowers > 80) {
    discount = numberOfFlowers * singleFlowerPrice * 0.15;
  } else if (typeOfFlowers == "Narcissus" && numberOfFlowers < 120) {
    surcharge = numberOfFlowers * singleFlowerPrice * 0.15;
  } else if (typeOfFlowers == "Gladiolus" && numberOfFlowers < 80) {
    surcharge = numberOfFlowers * singleFlowerPrice * 0.2;
  }

  totalPrice = numberOfFlowers * singleFlowerPrice - discount + surcharge;
  moneyLeft = budget - totalPrice;
  neededMoney = totalPrice - budget;

  if (budget > totalPrice || budget == totalPrice) {
    console.log(
      `Hey, you have a great garden with ${numberOfFlowers} ${typeOfFlowers} and ${moneyLeft.toFixed(
        2
      )} leva left.`
    );
  } else {
    console.log(
      `Not enough money, you need ${neededMoney.toFixed(2)} leva more.`
    );
  }
}

solve("Roses", 55, 250);

// if (typeOfFlowers == "Roses") {
//     singleFlowerPrice = 5;
// } else if (typeOfFlowers == "Dahlias") {
//     singleFlowerPrice = 3.8;
// } else if (typeOfFlowers == "Tulips") {
//     singleFlowerPrice = 2.8;
// } else if (typeOfFlowers == "Narcissus") {
//     singleFlowerPrice = 3;
// } else if (typeOfFlowers == "Gladiolus") {
//     singleFlowerPrice = 2.5;
// }

// switch (typeOfFlowers) {
// case "Roses":
//     singleFlowerPrice = 5;
//     break;
// case "Dahlias":
//     singleFlowerPrice = 3.8;
//     break;
// case "Tulips":
//     singleFlowerPrice = 2.8;
//     break;
// case "Narcissus":
//     singleFlowerPrice = 3;
//     break;
// case "Gladiolus":
//     singleFlowerPrice = 2.5;
//     break;
// }
