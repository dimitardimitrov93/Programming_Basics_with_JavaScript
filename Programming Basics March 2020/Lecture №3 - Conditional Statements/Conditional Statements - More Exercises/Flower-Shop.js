function flowerShop(inputNumberOfMagnolias, inputNumberOfHyacinth, inputNumberOfRoses, inputNumberOfCacti, inputPriceForPresent) {

    let numberOfMagnolias = Number(inputNumberOfMagnolias);
    let numberOfHyacinth = Number(inputNumberOfHyacinth);
    let numberOfRoses = Number(inputNumberOfRoses);
    let numberOfCacti = Number(inputNumberOfCacti);
    let priceForPresent = Number(inputPriceForPresent);

    let priceForMagnolias = 3.25;
    let priceForHyacinth = 4;
    let priceForRoses = 3.5;
    let priceForCacti = 8;

    let tax = 0.05;

    let income = (numberOfHyacinth * priceForHyacinth) + (numberOfMagnolias * priceForMagnolias) + (numberOfRoses * priceForRoses) + (numberOfCacti * priceForCacti);
    let totalIncome = income - (income * tax);

    let difference = Math.abs(totalIncome - priceForPresent);

    if (totalIncome >= priceForPresent) {
        console.log(`She is left with ${Math.floor(difference)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(difference)} leva.`);
    }

}

flowerShop(15, 7, 5, 10, 100);