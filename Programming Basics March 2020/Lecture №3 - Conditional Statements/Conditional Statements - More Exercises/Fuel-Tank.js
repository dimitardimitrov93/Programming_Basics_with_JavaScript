function fuelTank(typeOfFuel, inputNumberOfLitersInTank) {

    let numberOfLitersInTank = Number(inputNumberOfLitersInTank);

    if ((typeOfFuel == "Diesel") || (typeOfFuel == "Gasoline") || (typeOfFuel == "Gas")) {
        if (numberOfLitersInTank >= 25) {
            console.log(`You have enough ${typeOfFuel.toLowerCase()}.`);
        } else {
            console.log(`Fill your tank with ${typeOfFuel.toLowerCase()}!`);
        }
    } else {
        console.log(`Invalid fuel!`);
    }

}

fuelTank("Diesel", 60);