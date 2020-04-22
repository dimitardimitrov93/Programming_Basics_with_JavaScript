function solve(input) {
  let movesNum = Number(input.shift());
  let currentNum = Number(input.shift());

  let currentScore = 0;
  let finalScore = 0;

  let zeroToNine = 0;
  let tenToNineteen = 0;
  let twentyToTwentyNine = 0;
  let thirtyToThirtyNine = 0;
  let fortyToFifty = 0;
  let invalidNumbers = 0;

  let zeroToNinePercent = 0;
  let tenToNineteenPercent = 0;
  let twentyToTwentyNinePercent = 0;
  let thirtyToThirtyNinePercent = 0;
  let fortyToFiftyPercent = 0;
  let invalidNumbersPercent = 0;

  for (let i = 0; i < movesNum; i++) {
    if (currentNum >= 0 && currentNum <= 9) {
      currentScore = currentNum * 0.2;
      finalScore += currentScore;
      zeroToNine++;
    } else if ((currentNum >= 10) && (currentNum <= 19)) {
      currentScore = currentNum * 0.3;
      finalScore += currentScore;
      tenToNineteen++;
    } else if ((currentNum >= 20) && (currentNum <= 29)) {
      currentScore = currentNum * 0.4;
      finalScore += currentScore;
      twentyToTwentyNine++;
    } else if ((currentNum >= 30) && (currentNum <= 39)) {
      currentScore = 50;
      finalScore += currentScore;
      thirtyToThirtyNine++;
    } else if ((currentNum >= 40) && (currentNum <= 50)) {
      currentScore = 100;
      finalScore += currentScore;
      fortyToFifty++;
    } else if ((currentNum < 0) || (currentNum > 50)) {
      finalScore = finalScore / 2;
      invalidNumbers++;
    }

    currentNum = Number(input.shift());
  }

  zeroToNinePercent = ((zeroToNine / movesNum) * 100).toFixed(2);
  tenToNineteenPercent = ((tenToNineteen / movesNum) * 100).toFixed(2);
  twentyToTwentyNinePercent = ((twentyToTwentyNine / movesNum) * 100).toFixed(
    2
  );
  thirtyToThirtyNinePercent = ((thirtyToThirtyNine / movesNum) * 100).toFixed(
    2
  );
  fortyToFiftyPercent = ((fortyToFifty / movesNum) * 100).toFixed(2);
  invalidNumbersPercent = ((invalidNumbers / movesNum) * 100).toFixed(2);

  console.log(finalScore.toFixed(2));
  console.log(`From 0 to 9: ${zeroToNinePercent}%`);
  console.log(`From 10 to 19: ${tenToNineteenPercent}%`);
  console.log(`From 20 to 29: ${twentyToTwentyNinePercent}%`);
  console.log(`From 30 to 39: ${thirtyToThirtyNinePercent}%`);
  console.log(`From 40 to 50: ${fortyToFiftyPercent}%`);
  console.log(`Invalid numbers: ${invalidNumbersPercent}%`);
}

solve(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"]);
