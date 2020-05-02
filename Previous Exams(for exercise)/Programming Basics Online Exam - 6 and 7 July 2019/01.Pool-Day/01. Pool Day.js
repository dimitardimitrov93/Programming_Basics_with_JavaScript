function solve(input) {

    let numberOfPeople = Number(input.shift());
    let entranceTax = Number(input.shift());
    let sunbedPrice = Number(input.shift());
    let umbrellaPrice = Number(input.shift());

    let entranceTaxForAllPeople = numberOfPeople * entranceTax;

    let numberOfSunbeds = Math.ceil(numberOfPeople * 0.75);
    let moneyForSunbeds = numberOfSunbeds * sunbedPrice;

    let numberOfUmrellas = Math.ceil(numberOfPeople / 2);
    let priceForUmbrellas = numberOfUmrellas * umbrellaPrice;

    let finalPrice = (entranceTaxForAllPeople + moneyForSunbeds + priceForUmbrellas).toFixed(2);

    console.log(`${finalPrice} lv.`);
}

solve([21, 5.50, 4.40, 6.20]);
solve([50, 6, 8, 4]);
solve([100, 8, 6, 4]);