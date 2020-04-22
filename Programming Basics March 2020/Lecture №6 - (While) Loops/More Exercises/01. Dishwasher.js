function solve(input) {
  let detergentBottles = Number(input.shift());
  let currentNumOfDishes = input.shift();

  let detergentQuantity = detergentBottles * 750;
  let currentDetergentQuantity = 0;

  let counter = 1;

  let currentDishesNum = 0;
  let currentPotsNum = 0;

  let dishesNum = 0;
  let potsNum = 0;

  let detergentForDishes = 0;
  let detergentForPots = 0;

  let detergentForAllDishes = 0;

  let difference = 0;

  while ((currentNumOfDishes != "End") && (currentDetergentQuantity <= detergentQuantity)) {
    currentNumOfDishes = Number(currentNumOfDishes);

    if (counter % 3 != 0) {
      currentDishesNum = currentNumOfDishes;
      dishesNum += currentNumOfDishes;

      detergentForDishes = currentDishesNum * 5;
      detergentForAllDishes = detergentForDishes;
    } else if (counter % 3 == 0) {
      currentPotsNum = currentNumOfDishes;
      potsNum += currentNumOfDishes;

      detergentForPots = currentPotsNum * 15;
      detergentForAllDishes = detergentForPots;
    }

    currentDetergentQuantity += detergentForAllDishes;

    currentNumOfDishes = input.shift();
    counter++;
  }

  if (currentDetergentQuantity <= detergentQuantity) {
    difference = detergentQuantity - currentDetergentQuantity;
  } else {
    difference = Math.abs(detergentQuantity - currentDetergentQuantity);
  }

  if (currentDetergentQuantity <= detergentQuantity) {
    console.log(`Detergent was enough!`);
    console.log(`${dishesNum} dishes and ${potsNum} pots were washed.`);
    console.log(`Leftover detergent ${difference} ml.`);
  } else {
    console.log(`Not enough detergent, ${difference} ml. more necessary!`);
  }
}

solve(["2", "53", "65", "55", "End"]);