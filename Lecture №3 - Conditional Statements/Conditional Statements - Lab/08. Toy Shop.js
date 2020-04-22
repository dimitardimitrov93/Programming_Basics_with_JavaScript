function solve(excursionPrice, saws, dolls, teddybears, minions, trucks) {
  excursionPrice = Number(excursionPrice);
  saws = Number(saws);
  dolls = Number(dolls);
  teddybears = Number(teddybears);
  minions = Number(minions);
  trucks = Number(trucks);

  let totalNumberOfToys = saws + dolls + teddybears + minions + trucks;

  let moneyFromSaws = saws * 2.6;
  let moneyFromDolls = dolls * 3;
  let moneyFromTeddyBears = teddybears * 4.1;
  let moneyFromMinions = minions * 8.2;
  let moneyFromTrucks = trucks * 2;

  totalPrice =
    moneyFromSaws +
    moneyFromDolls +
    moneyFromTeddyBears +
    moneyFromMinions +
    moneyFromTrucks;

  if (totalNumberOfToys >= 50) {
    let totalMoney = totalPrice * 0.75;
    totalIncome = totalMoney - totalMoney / 10;
  } else {
    totalIncome = totalPrice - totalPrice / 10;
  }

  if (totalIncome >= excursionPrice) {
    let moneyLeft = totalIncome - excursionPrice;

    console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
  } else if (totalIncome < excursionPrice) {
    let neededMoney = excursionPrice - totalIncome;

    console.log(`Not enough money! ${neededMoney.toFixed(2)} lv needed.`);
  }
}

solve(40.8, 20, 25, 30, 50, 10);
