function solve(input) {
  let expectedSum = Number(input.shift());
  let currentObjectPrice = input.shift();

  let cashSum = 0;
  let cardSum = 0;
  let currentSum = 0;

  let averageCashPayment = 0;
  let averageCardPayment = 0;

  let cashPaymentCounter = 0;
  let cardPaymentCounter = 0;

  let counter = 1;

  while (currentObjectPrice != "End" && currentSum < expectedSum) {
    currentObjectPrice = Number(currentObjectPrice);

    if (counter % 2 != 0) {
      if (currentObjectPrice <= 100) {
        console.log(`Product sold!`);

        cashSum += currentObjectPrice;
        currentSum += currentObjectPrice;

        cashPaymentCounter++;
      } else {
        console.log(`Error in transaction!`);
      }
    } else if (counter % 2 == 0) {
      if (currentObjectPrice > 10) {
        console.log(`Product sold!`);

        cardSum += currentObjectPrice;
        currentSum += currentObjectPrice;

        cardPaymentCounter++;
      } else {
        console.log(`Error in transaction!`);
      }
    }

    counter++;
    currentObjectPrice = input.shift();
  }

  averageCashPayment = (cashSum / cashPaymentCounter).toFixed(2);
  averageCardPayment = (cardSum / cardPaymentCounter).toFixed(2);

  if (currentObjectPrice != "End") {
    console.log(`Average CS: ${averageCashPayment}`);
    console.log(`Average CC: ${averageCardPayment}`);
  } else {
    console.log(`Failed to collect required money for charity.`);
  }
}

solve(["500", "120", "8", "63", "256", "78", "317"]);
solve(["600", "86", "150", "98", "227", "End"]);
