function maxNumber() {
  let currentMaxNum = 0;

  for (let i = 1; i <= arguments.length; i++) {
    currentNum = arguments[i];

    if (currentNum > currentMaxNum) {
      currentMaxNum = currentNum;
    }
  }

  console.log(`max = ${currentMaxNum}`);
}

maxNumber(2, 100, 99);
