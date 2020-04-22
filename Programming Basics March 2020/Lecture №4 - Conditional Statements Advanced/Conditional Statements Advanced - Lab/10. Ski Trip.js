function solve(inputVacationDays, roomType, feedback) {
  let vacationDays = Number(inputVacationDays) - 1;
  let priceForNight = 0.0;
  let totalPriceForStay = 0.0;
  let discountPercent = 0.0;

  // Room prices for a night:

  // if (roomType == "room for one person") {
  //     priceForNight = 18;
  // } else if (roomType == "apartment") {
  //     priceForNight = 25;
  // } else if (roomType == "president apartment") {
  //     priceForNight = 35;
  // }

  switch (roomType) {
    case "room for one person":
      priceForNight = 18;
      break;
    case "apartment":
      priceForNight = 25;
      break;
    case "president apartment":
      priceForNight = 35;
      break;
  }

  if (roomType == "apartment" && vacationDays < 10) {
    discountPercent = 0.3;
  } else if (
    roomType == "apartment" &&
    vacationDays >= 10 &&
    vacationDays <= 15
  ) {
    discountPercent = 0.35;
  } else if (roomType == "apartment" && vacationDays > 15) {
    discountPercent = 0.5;
  }

  if (roomType == "president apartment" && vacationDays < 10) {
    discountPercent = 0.1;
  } else if (
    roomType == "president apartment" &&
    vacationDays >= 10 &&
    vacationDays <= 15
  ) {
    discountPercent = 0.15;
  } else if (roomType == "president apartment" && vacationDays > 15) {
    discountPercent = 0.2;
  }

  let PriceForStay = vacationDays * priceForNight;
  let discount = PriceForStay * discountPercent;
  totalPriceForStay = PriceForStay - discount;

  if (feedback == "positive") {
    totalPriceForStay = totalPriceForStay + totalPriceForStay * 0.25;
  } else if (feedback == "negative") {
    totalPriceForStay = totalPriceForStay - totalPriceForStay * 0.1;
  }

  console.log(totalPriceForStay.toFixed(2));
}

solve(12, "room for one person", "positive");
