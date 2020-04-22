function fruitShop(typeOfFruit, dayOfTheWeek, inputQuantity) {
  let singlePrice = 0.0;
  let quantity = Number(inputQuantity);

  if (
    (dayOfTheWeek == "Monday" ||
      dayOfTheWeek == "Tuesday" ||
      dayOfTheWeek == "Wednesday" ||
      dayOfTheWeek == "Thursday" ||
      dayOfTheWeek == "Friday" ||
      dayOfTheWeek == "Saturday" ||
      dayOfTheWeek == "Sunday") &&
    (typeOfFruit == "banana" ||
      typeOfFruit == "apple" ||
      typeOfFruit == "orange" ||
      typeOfFruit == "grapefruit" ||
      typeOfFruit == "kiwi" ||
      typeOfFruit == "pineapple" ||
      typeOfFruit == "grapes")
  ) {
    if (
      dayOfTheWeek == "Monday" ||
      dayOfTheWeek == "Tuesday" ||
      dayOfTheWeek == "Wednesday" ||
      dayOfTheWeek == "Thursday" ||
      dayOfTheWeek == "Friday"
    ) {
      switch (typeOfFruit) {
        case "banana":
          singlePrice = 2.5;
          break;
        case "apple":
          singlePrice = 1.2;
          break;
        case "orange":
          singlePrice = 0.85;
          break;
        case "grapefruit":
          singlePrice = 1.45;
          break;
        case "kiwi":
          singlePrice = 2.7;
          break;
        case "pineapple":
          singlePrice = 5.5;
          break;
        case "grapes":
          singlePrice = 3.85;
          break;
        default:
          console.log("error");
          break;
      }
    } else if (dayOfTheWeek == "Saturday" || dayOfTheWeek == "Sunday") {
      switch (typeOfFruit) {
        case "banana":
          singlePrice = 2.7;
          break;
        case "apple":
          singlePrice = 1.25;
          break;
        case "orange":
          singlePrice = 0.9;
          break;
        case "grapefruit":
          singlePrice = 1.6;
          break;
        case "kiwi":
          singlePrice = 3;
          break;
        case "pineapple":
          singlePrice = 5.6;
          break;
        case "grapes":
          singlePrice = 4.2;
          break;
        default:
          console.log("error");
          break;
      }
    }

    let totalPrice = quantity * singlePrice;
    console.log(totalPrice.toFixed(2));
  } else {
    console.log("error");
  }
}

fruitShop("banana", "Tuesday", 2);
