function solve(lilyAgeInput, washingMachinePriceInput, toyPriceInput) {
  let lilyAge = Number(lilyAgeInput);
  let washingMachinePrice = Number(washingMachinePriceInput);
  let toyPrice = Number(toyPriceInput);

  let numberOfToys = 0;
  let moneyFromToys = 0;

  let moneyFromBirthdays = 0;
  let givenMoneyOnBirthday = 0;
  let moneyTakenFromBrother = 1;

  let difference = 0;

  for (let i = 1; i <= lilyAge; i++) {
    if (i % 2 > 0) {
      numberOfToys += 1;
    }

    if (i % 2 == 0) {
      givenMoneyOnBirthday += 10;
      moneyFromBirthdays += givenMoneyOnBirthday - moneyTakenFromBrother;
    }
  }

  moneyFromToys = numberOfToys * toyPrice;
  let totalSavedMoney = moneyFromBirthdays + moneyFromToys;
  difference = Math.abs(totalSavedMoney - washingMachinePrice);

  if (totalSavedMoney >= washingMachinePrice) {
    console.log(`Yes! ${difference.toFixed(2)}`);
  } else {
    console.log(`No! ${difference.toFixed(2)}`);
  }
}

solve(10, 170, 6);
solve(21, 1570.98, 3);
