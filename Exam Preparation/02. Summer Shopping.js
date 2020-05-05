function solve(input) {
    let budget = Number(input.shift());
    let beachTowelPrice = Number(input.shift());
    let discount = Number(input.shift());
    let discountPercent = discount / 100;

    let beachUmbrellaPrice = (beachTowelPrice / 3) * 2;
    let slippersPrice = 0.75 * beachUmbrellaPrice;
    let beachBagPrice = (slippersPrice + beachTowelPrice) / 3;

    let currentPrice = beachUmbrellaPrice + beachTowelPrice + slippersPrice + beachBagPrice;
    let finalPrice = currentPrice - (currentPrice * discountPercent);

    let difference = Math.abs(budget - finalPrice);

    if (finalPrice <= budget) {
        console.log(`Annie's sum is ${finalPrice.toFixed(2)} lv. She has ${difference.toFixed(2)} lv. left.`);
    } else {
        console.log(`Annie's sum is ${finalPrice.toFixed(2)} lv. She needs ${difference.toFixed(2)} lv. more.`);
    }
}

solve([ '40', '15', '5', '' ]);