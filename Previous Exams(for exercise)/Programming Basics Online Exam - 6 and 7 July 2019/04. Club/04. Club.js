function solve(input) {
    let targetMoney = Number(input.shift());
    let order = 0;
    let totalIncome = 0;

    let cocktailName = input.shift();

    while ((cocktailName != "Party!") && (totalIncome < targetMoney)) {
        let cocktailsNumber = Number(input.shift());
        let cocktailPrice = Number(cocktailName.length);

        order = (cocktailsNumber * cocktailPrice);

        if (order % 2 != 0) {
            order -= (order * 0.25);
        }

        totalIncome += order;
        cocktailName = input.shift();
    }

    let difference = Math.abs(totalIncome - targetMoney);

    if (cocktailName == "Party!") {
        console.log(`We need ${difference.toFixed(2)} leva more.`);
    } else {
        console.log(`Target acquired.`);
    }
    console.log(`Club income - ${totalIncome.toFixed(2)} leva.`);
}

solve([ '500', 'Bellini', '6', 'Bamboo', '7', 'Party!' ]);