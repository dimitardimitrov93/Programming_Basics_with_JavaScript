function timeMachine(input) {
  let inheritedMoney = Number(input.shift());
  let yearToLive = Number(input.shift());

  let difference = 0;

  let yearsInThePast = yearToLive - 1800;
  let IncremenationAge = 1;
  let currentAge = 0;

  let oddYearsSum = 0;
  let EvenYearsSum = 0;

  for (let i = 0; i <= yearsInThePast; i++) {
    currentAge = 17 + IncremenationAge;
    IncremenationAge += 1;
    if (i % 2 == 0) {
      EvenYearsSum += 12000;
    }
    if (i % 2 > 0) {
      oddYearsSum += 12000 + 50 * currentAge;
    }
  }

  let moneyNeededForLiving = EvenYearsSum + oddYearsSum;
  difference = Math.abs(moneyNeededForLiving - inheritedMoney);

  if (moneyNeededForLiving <= inheritedMoney) {
    console.log(
      `Yes! He will live a carefree life and will have ${difference.toFixed(
        2
      )} dollars left.`
    );
  } else {
    console.log(`He will need ${difference.toFixed(2)} dollars to survive.`);
  }
}

timeMachine(50000, 1802);
timeMachine(100000.15, 1808);
