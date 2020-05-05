function solve(input) {

    let cruiseType = input.shift();
    let cabinType = input.shift();
    let nightsNum = Number(input.shift());

    let priceForNight = 0;

    if (cruiseType == "Mediterranean") {
        switch (cabinType) {
            case "standard cabin":
                priceForNight = 27.5;
            break;
            case "cabin with balcony":
                priceForNight = 30.2;
            break;
            case "apartment":
                priceForNight = 40.5;
            break;
        }
    } else if (cruiseType == "Adriatic") {
        switch (cabinType) {
            case "standard cabin":
                priceForNight = 22.99;
            break;
            case "cabin with balcony":
                priceForNight = 25;
            break;
            case "apartment":
                priceForNight = 34.99;
            break;
        }          
    } else if (cruiseType == "Aegean") {
        switch (cabinType) {
            case "standard cabin":
                priceForNight = 23;
            break;
            case "cabin with balcony":
                priceForNight = 26.6;
            break;
            case "apartment":
                priceForNight = 39.8;
            break;
        }       
    }

    let finalPrice = 4 * (nightsNum * priceForNight);
    let dicount = 0.25;

    if (nightsNum > 7) {
        finalPrice = finalPrice - (finalPrice * dicount);
    }
    console.log(`Annie's holiday in the ${cruiseType} sea costs ${finalPrice.toFixed(2)} lv.`);
}

solve([ 'Aegean', 'standard cabin', '10', '' ]);