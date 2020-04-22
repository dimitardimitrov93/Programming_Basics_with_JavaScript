function solve(input) {
  let excursionPrice = Number(input.shift());
  let currentMoney = Number(input.shift());
  let action = input.shift();
  let amountMoney = Number(input.shift());
  let counter = 5;
  let daysCounter = 0;
  let spendingCounter = 0;

  while (currentMoney < excursionPrice && spendingCounter < counter) {
    if (action == "save") {
      currentMoney += amountMoney;
      spendingCounter = 0;
    } else {
      if (amountMoney <= currentMoney) {
        currentMoney -= amountMoney;
      } else {
        currentMoney = 0;
      }
      spendingCounter++;
    }

    action = input.shift();
    amountMoney = Number(input.shift());

    daysCounter++;
  }

  if (spendingCounter == counter) {
    console.log("You can't save the money.");
    console.log(daysCounter);
  }

  if (currentMoney >= excursionPrice) {
    console.log(`You saved the money for ${daysCounter} days.`);
  }
}

solve(["2000", "1000", "spend", "1200", "save", "2000"]);
solve([
  "250",
  "150",
  "spend",
  "50",
  "spend",
  "50",
  "save",
  "100",
  "save",
  "100",
]);
