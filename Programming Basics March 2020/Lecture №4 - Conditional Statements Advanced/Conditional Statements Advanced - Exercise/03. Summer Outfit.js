function solve(inputDegrees, timeOfDay) {
  let degrees = Number(inputDegrees);
  let typeOfClothing = "";
  let typeOfShoes = "";

  if (degrees >= 10 && degrees <= 18) {
    if (timeOfDay == "Morning") {
      typeOfClothing = "Sweatshirt";
      typeOfShoes = "Sneakers";
    } else if (timeOfDay == "Afternoon" || timeOfDay == "Evening") {
      typeOfClothing = "Shirt";
      typeOfShoes = "Moccasins";
    }
  } else if (degrees > 18 && degrees <= 24) {
    if (timeOfDay == "Morning") {
      typeOfClothing = "Shirt";
      typeOfShoes = "Moccasins";
    } else if (timeOfDay == "Afternoon") {
      typeOfClothing = "T-Shirt";
      typeOfShoes = "Sandals";
    } else if (timeOfDay == "Evening") {
      typeOfClothing = "Shirt";
      typeOfShoes = "Moccasins";
    }
  } else if (degrees >= 25) {
    if (timeOfDay == "Morning") {
      typeOfClothing = "T-Shirt";
      typeOfShoes = "Sandals";
    } else if (timeOfDay == "Afternoon") {
      typeOfClothing = "Swim Suit";
      typeOfShoes = "Barefoot";
    } else if (timeOfDay == "Evening") {
      typeOfClothing = "Shirt";
      typeOfShoes = "Moccasins";
    }
  }

  console.log(
    `It's ${degrees} degrees, get your ${typeOfClothing} and ${typeOfShoes}.`
  );
}

solve(25, "Afternoon");
