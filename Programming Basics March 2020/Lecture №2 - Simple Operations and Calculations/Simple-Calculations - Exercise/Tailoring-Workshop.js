function solve(tableNum, tableLength, tableWidth) {

    let tableNums = Number(tableNum);
    let tableLengths = Number(tableLength);
    let tableWidths = Number(tableWidth);

    let tableClothSquareMeters = (tableLengths + 2 * 0.30) * (tableWidths + 2 * 0.30);
    let coffeeClothSquareMeters = (tableLengths / 2) * (tableLengths / 2);

    usdTableClothPrice = tableClothSquareMeters * 7;
    usdCoffeeClothPrice = coffeeClothSquareMeters * 9;
    usdTotalPrice = tableNums * (usdTableClothPrice + usdCoffeeClothPrice);

    bgnTableClothPriceSqM = 7 * 1.85;
    bgnCoffeeClothPriceSqM = 9 * 1.85;
    bgnTotalPrice = tableNums * ((tableClothSquareMeters * bgnTableClothPriceSqM) + (coffeeClothSquareMeters * bgnCoffeeClothPriceSqM));

    console.log(`${usdTotalPrice.toFixed(2)} USD`);
    console.log(`${bgnTotalPrice.toFixed(2)} BGN`);

}