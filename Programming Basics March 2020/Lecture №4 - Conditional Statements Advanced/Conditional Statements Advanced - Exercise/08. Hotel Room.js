function solve(month, InputNightsNum) {
  let nightsNum = Number(InputNightsNum);
  let studioPrice = 0.0;
  let apartmentPrice = 0.0;
  let totalPriceStudio = 0.0;
  let totalPriceApartment = 0.0;

  if (month == "May" || month == "October") {
    studioPrice = 50;
    apartmentPrice = 65;
  } else if (month == "June" || month == "September") {
    studioPrice = 75.2;
    apartmentPrice = 68.7;
  } else if (month == "July" || month == "August") {
    studioPrice = 76;
    apartmentPrice = 77;
  }

  if (
    nightsNum > 7 &&
    nightsNum <= 14 &&
    (month == "May" || month == "October")
  ) {
    totalPriceStudio = nightsNum * studioPrice - nightsNum * studioPrice * 0.05;
  } else if (nightsNum > 14 && (month == "May" || month == "October")) {
    totalPriceStudio = nightsNum * studioPrice - nightsNum * studioPrice * 0.3;
  } else if (nightsNum > 14 && (month == "June" || month == "September")) {
    totalPriceStudio = nightsNum * studioPrice - nightsNum * studioPrice * 0.2;
  } else {
    totalPriceStudio = nightsNum * studioPrice;
  }

  if (nightsNum > 14) {
    totalPriceApartment =
      nightsNum * apartmentPrice - nightsNum * apartmentPrice * 0.1;
  } else {
    totalPriceApartment = nightsNum * apartmentPrice;
  }

  console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.`);
  console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`);
}

solve("August", 20);
