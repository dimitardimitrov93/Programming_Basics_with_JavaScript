function solve(input) {
  let pairsNum = Number(input.shift());
  let firstNum = Number(input.shift());
  let secondNum = Number(input.shift());

  let currentPairSum = 0;
  let pairSum = firstNum + secondNum;

  let difference = 0;
  let maxDifference = 0;

  let differentPairs = 0;

  for (let i = 0; i < pairsNum; i++) {
    currentPairSum = firstNum + secondNum;

    if (currentPairSum != pairSum) {
      difference = Math.abs(currentPairSum - pairSum);

      if (difference > maxDifference) {
        maxDifference = difference;
      }

      pairSum = currentPairSum;

      differentPairs++;
    }

    firstNum = Number(input.shift());
    secondNum = Number(input.shift());
  }

  if (differentPairs > 0) {
    console.log(`No, maxdiff=${maxDifference}`);
  } else {
    console.log(`Yes, value=${pairSum}`);
  }
}

solve(['3', '1', '2', '0', '3', '4', '-1']);
solve(['4', '1', '1', '3', '1', '2', '2', '0', '0']);
solve(['2', '-1', '0', '0', '-1']);
solve(['2', '1', '2', '2', '2']);
solve(['1', '5', '5']);
solve(['2', '-1', '2', '0', '-1']);
