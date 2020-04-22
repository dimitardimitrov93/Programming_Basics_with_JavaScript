function fuelTank2(typeOfFuel, inputQuantityOfFuel, card) {

    let quantityOfFuel = Number(inputQuantityOfFuel);

    let priceForGasoline = 2.22;
    let priceForDiesel = 2.33;
    let priceForGas = 0.93;
    let priceForFuel = 0.0;
    let totalPriceForFuel = 0.0;
    
    if (card == "Yes") {
        priceForGasoline = priceForGasoline - 0.18;
        priceForDiesel = priceForDiesel - 0.12;
        priceForGas = priceForGas - 0.08;
    }

    if (typeOfFuel == "Gas") {
        priceForFuel = priceForGas * quantityOfFuel;
    } else if (typeOfFuel == "Diesel") {
        priceForFuel = priceForDiesel * quantityOfFuel;
    } else if (typeOfFuel == "Gasoline") {
        priceForFuel = priceForGasoline * quantityOfFuel;
    }

    if ((quantityOfFuel >= 20) && (quantityOfFuel <= 25)) {
        totalPriceForFuel = priceForFuel - (priceForFuel * 0.08);
    } else if (quantityOfFuel > 25) {
        totalPriceForFuel = priceForFuel - (priceForFuel * 0.1);
    } else {
        totalPriceForFuel = priceForFuel;
    }

    console.log(`${(totalPriceForFuel).toFixed(2)} lv.`);
}

fuelTank2("Gas", 30, "Yes");