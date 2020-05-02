function solve(input) {

    let drinkType = input.shift();
    let withOrWithoutSugar = input.shift();
    let drinksNumber = Number(input.shift());

    let noSugarDiscount = 0.35;
    let espressoDisount = 0.25;
    let finalPriceDiscount = 0.2;

    let espressoPrice = 0;
    let cappucinoPrice = 0;
    let teaPrice = 0;

    let drinkPrice = 0;
    let finalPrice = 0;

    if (drinkType == "Espresso") {
        switch (withOrWithoutSugar) {
            case "Without":
                espressoPrice = 0.9 - (0.9 * noSugarDiscount);
                break;
            case "Normal":
                espressoPrice = 1;
                break;
            case "Extra":
                espressoPrice = 1.2;
                break;
        }

        if (drinksNumber >= 5) {
            drinkPrice = (drinksNumber * espressoPrice) - ((drinksNumber * espressoPrice) * espressoDisount);
        } else {
            drinkPrice = (drinksNumber * espressoPrice);
        }

        if (drinkPrice > 15) {
            finalPrice = drinkPrice - (drinkPrice * finalPriceDiscount);
        } else {
            finalPrice = drinkPrice;
        }
    } else if (drinkType == "Cappuccino") {
        switch (withOrWithoutSugar) {
            case "Without":
                cappucinoPrice = 1 - (1 * noSugarDiscount);
                break;
            case "Normal":
                cappucinoPrice = 1.2;
                break;
            case "Extra":
                cappucinoPrice = 1.6;
                break;
        }

        drinkPrice = (drinksNumber * cappucinoPrice);

        if (drinkPrice > 15) {
            finalPrice = drinkPrice - (drinkPrice * finalPriceDiscount);
        } else {
            finalPrice = drinkPrice;
        }
    } else if (drinkType == "Tea") {
        switch (withOrWithoutSugar) {
            case "Without":
                teaPrice = 0.5 - (0.5 * noSugarDiscount);
                break;
            case "Normal":
                teaPrice = 0.6;
                break;
            case "Extra":
                teaPrice = 0.7;
                break;
        }

        drinkPrice = (drinksNumber * teaPrice);

        if (drinkPrice > 15) {
            finalPrice = drinkPrice - (drinkPrice * finalPriceDiscount);
        } else {
            finalPrice = drinkPrice;
        }
    }

    console.log(`You bought ${drinksNumber} cups of ${drinkType} for ${finalPrice.toFixed(2)} lv.`);
    
}

solve([ 'Espresso', 'Without', '10' ]);
solve([ 'Cappuccino', 'Normal', '13' ]);
solve([ 'Tea', 'Extra', '3' ]);