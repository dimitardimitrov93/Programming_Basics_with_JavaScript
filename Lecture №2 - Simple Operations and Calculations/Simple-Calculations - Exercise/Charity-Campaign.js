function solve(days, pastryCooks, cakes, waffles, pancakes) {
    days = Number(days);
    pastryCooks = Number(pastryCooks);
    cakes = Number(cakes);
    waffles = Number(waffles);
    pancakes = Number(pancakes);

    moneyFromCakesPD = cakes * 45;
    moneyFromWafflesPD = waffles * 5.8;
    moneyFromPancakesPD = pancakes * 3.2;

    totalMoneyPD = pastryCooks * (moneyFromCakesPD + moneyFromWafflesPD + moneyFromPancakesPD);

    totalMoneyForWholePeriod = days * totalMoneyPD;

    totalMoneyForCharity = totalMoneyForWholePeriod - (totalMoneyForWholePeriod / 8);

    console.log((totalMoneyForCharity.toFixed(2)));
    
}

solve(131, 5, 9, 33, 46);