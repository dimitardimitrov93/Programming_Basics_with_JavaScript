function solve(input) {
    let townName = input.shift();
    let packetType = input.shift();
    let vipDiscount = input.shift();
    let daysToStay = Number(input.shift());

    let priceForDay = 0;
    let vipDiscountPercent = 0;

    let totalPriceForStay = 0;

    if (daysToStay >= 1) {

        if (daysToStay > 7) {
            daysToStay = daysToStay - 1;
        }

        if ((townName == "Bansko") || (townName == "Borovets")) {
            if ((packetType == "noEquipment") || (packetType == "withEquipment")) {
                if (packetType == "noEquipment") {
                    priceForDay = 80;
                    vipDiscountPercent = 0.05;
                } else if (packetType == "withEquipment") {
                    priceForDay = 100;
                    vipDiscountPercent = 0.1;
                }
    
                if (vipDiscount == "yes") {
                    totalPriceForStay = daysToStay * (priceForDay - (priceForDay * vipDiscountPercent));
                } else {
                    totalPriceForStay = daysToStay * priceForDay;
                }
    
                console.log(`The price is ${totalPriceForStay.toFixed(2)}lv! Have a nice time!`);
            } else {
                console.log("Invalid input!");   
            }
        } else if ((townName == "Varna") || (townName == "Burgas")) {
            if ((packetType == "noBreakfast") || (packetType == "withBreakfast")) {
                if (packetType == "noBreakfast") {
                    priceForDay = 100;
                    vipDiscountPercent = 0.07;
                } else if (packetType == "withBreakfast") {
                    priceForDay = 130;
                    vipDiscountPercent = 0.12;
                }
    
                if (vipDiscount == "yes") {
                    totalPriceForStay = daysToStay * (priceForDay - (priceForDay * vipDiscountPercent));
                } else {
                    totalPriceForStay = daysToStay * priceForDay;
                }
    
                if (daysToStay >= 1) {
                    console.log(`The price is ${totalPriceForStay.toFixed(2)}lv! Have a nice time!`);
                } else {
                    console.log(`Days must be positive number!`);
                }
            } else {
                console.log("Invalid input!");   
            }
        } else {
            console.log("Invalid input!");
        }
    } else {
        console.log(`Days must be positive number!`);
    }
}

solve([ 'Borovets', 'noEquipment', 'yes', '6' ]);
// solve([ 'Bansko', 'withEquipment', 'no', '-1' ]);
// solve([ 'Burgas', 'noBreakfast', 'no', '4' ]);
// solve([ 'Varna', 'withBreakfast', 'no', '0' ]);
// solve([ 'Varna', 'noBreakfast', 'no', '0', '' ]);