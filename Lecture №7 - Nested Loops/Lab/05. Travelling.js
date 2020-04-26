function solve(input) {
  let destination = input.shift();
  let minBudget = Number(input.shift());

  let currentAmountMoney = Number(input.shift());
  let sum = 0;

  while (destination != "End") {
    while (sum < minBudget) {
      sum += Number(currentAmountMoney);
      currentAmountMoney = input.shift();

      if (sum >= minBudget) {
        console.log(`Going to ${destination}!`);
        destination = currentAmountMoney;
        minBudget = Number(input.shift());
        currentAmountMoney = input.shift();
        sum = 0;
      }
    }
  }
}

// solve([
//   "Greece",
//   "1000",
//   "200",
//   "200",
//   "300",
//   "100",
//   "150",
//   "240",
//   "Spain",
//   "1200",
//   "300",
//   "500",
//   "193",
//   "423",
//   "End",
//   "",
// ]);

solve([
  "France",
  "2000",
  "300",
  "300",
  "200",
  "400",
  "190",
  "258",
  "360",
  "Portugal",
  "1450",
  "400",
  "400",
  "200",
  "300",
  "300",
  "Egypt",
  "1900",
  "1000",
  "280",
  "300",
  "500",
  "End",
  "",
]);
