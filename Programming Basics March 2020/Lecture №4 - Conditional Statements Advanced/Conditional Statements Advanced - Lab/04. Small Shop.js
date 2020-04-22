function solve(product, city, inputQuantity) {
  let quantity = Number(inputQuantity);
  let priceForSingleProduct = 0.0;

  if (city == "Sofia") {
    switch (product) {
      case "coffee":
        priceForSingleProduct = 0.5;
        break;
      case "water":
        priceForSingleProduct = 0.8;
        break;
      case "beer":
        priceForSingleProduct = 1.2;
        break;
      case "sweets":
        priceForSingleProduct = 1.45;
        break;
      case "peanuts":
        priceForSingleProduct = 1.6;
        break;
    }
  } else if (city == "Plovdiv") {
    switch (product) {
      case "coffee":
        priceForSingleProduct = 0.4;
        break;
      case "water":
        priceForSingleProduct = 0.7;
        break;
      case "beer":
        priceForSingleProduct = 1.15;
        break;
      case "sweets":
        priceForSingleProduct = 1.3;
        break;
      case "peanuts":
        priceForSingleProduct = 1.5;
        break;
    }
  } else if (city == "Varna") {
    switch (product) {
      case "coffee":
        priceForSingleProduct = 0.45;
        break;
      case "water":
        priceForSingleProduct = 0.7;
        break;
      case "beer":
        priceForSingleProduct = 1.1;
        break;
      case "sweets":
        priceForSingleProduct = 1.35;
        break;
      case "peanuts":
        priceForSingleProduct = 1.55;
        break;
    }
  }

  console.log(quantity * priceForSingleProduct);
}

solve("coffee", "Varna", 2);
