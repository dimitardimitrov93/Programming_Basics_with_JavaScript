function solve(input) {
  let competitorsNum = Number(input.shift());

  let cookiesPrice = 1.5;
  let cakesPrice = 7.8;
  let wafflesPrice = 2.3;

  let totalCookiesCounter = 0;
  let totalCakesCounter = 0;
  let totalWafflesCounter = 0;

  let charitySum = 0;
  let totalBakerySold = 0;

  for (let i = 1; i <= competitorsNum; i++) {
    let competitorName = input.shift();
    let pastryType = input.shift();
    let bakedPastryNum = 0;

    let cookiesCounter = 0;
    let cakesCounter = 0;
    let wafflesCounter = 0;
    while (pastryType != "Stop baking!") {
      bakedPastryNum = Number(input.shift());
      switch (pastryType) {
        case "cookies":
          cookiesCounter += bakedPastryNum;
          totalCookiesCounter += bakedPastryNum;
          charitySum += bakedPastryNum * cookiesPrice;
          break;
        case "cakes":
          cakesCounter += bakedPastryNum;
          totalCakesCounter += bakedPastryNum;
          charitySum += bakedPastryNum * cakesPrice;
          break;
        case "waffles":
          wafflesCounter += bakedPastryNum;
          totalWafflesCounter += bakedPastryNum;
          charitySum += bakedPastryNum * wafflesPrice;
          break;
      }

      pastryType = input.shift();
    }
    console.log(
      `${competitorName} baked ${cookiesCounter} cookies, ${cakesCounter} cakes and ${wafflesCounter} waffles.`
    );
  }

  totalBakerySold += totalCookiesCounter + totalCakesCounter + totalWafflesCounter;

  console.log(`All bakery sold: ${totalBakerySold}`);
  console.log(`Total sum for charity: ${charitySum.toFixed(2)} lv.`);
}

// solve([
//   "3",
//   "Iva",
//   "cookies",
//   "5",
//   "cakes",
//   "3",
//   "Stop baking!",
//   "George",
//   "cakes",
//   "7",
//   "waffles",
//   "2",
//   "Stop baking!",
//   "Ivan",
//   "cookies",
//   "6",
//   "Stop baking!",
// ]);

solve([
  "2",
  "Annie",
  "cakes",
  "3",
  "waffles",
  "6",
  "cookies",
  "2",
  "Stop baking!",
  "Petya",
  "waffles",
  "8",
  "Stop baking!",
]);
