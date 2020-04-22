function solve(changeInput) {
  let change = Number(changeInput);
  let currentCoinsNum = 0;
  let coinCount = 0;

  change *= 100;

  if (change >= 200) {
    currentCoinsNum = Math.trunc(change / 200);
    coinCount += currentCoinsNum;
    change -= coinCount * 200;
  }

  if (change >= 100) {
    currentCoinsNum = Math.trunc(change / 100);
    coinCount += currentCoinsNum;
    change -= currentCoinsNum * 100;
  }

  if (change >= 50) {
    currentCoinsNum = Math.trunc(change / 50);
    coinCount += currentCoinsNum;
    change -= currentCoinsNum * 50;
  }

  if (change >= 20) {
    currentCoinsNum = Math.trunc(change / 20);
    coinCount += currentCoinsNum;
    change -= currentCoinsNum * 20;
  }

  if (change >= 10) {
    currentCoinsNum = Math.trunc(change / 10);
    coinCount += currentCoinsNum;
    change -= currentCoinsNum * 10;
  }

  if (change >= 5) {
    currentCoinsNum = Math.trunc(change / 5);
    coinCount += currentCoinsNum;
    change -= currentCoinsNum * 5;
  }

  if (change >= 2) {
    currentCoinsNum = Math.trunc(change / 2);
    coinCount += currentCoinsNum;
    change -= currentCoinsNum * 2;
  }

  if (change >= 1) {
    currentCoinsNum = Math.trunc(change / 1);
    coinCount += currentCoinsNum;
    change -= currentCoinsNum * 1;
  }

  console.log(coinCount);
}

solve(3);
