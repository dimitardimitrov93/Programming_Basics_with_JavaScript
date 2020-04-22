function solve(whiskeyPrice, beerToBuy, wineToBuy, rakiaToBuy, whiskeyToBuy) {

    let whiskeyPriceNum = Number(whiskeyPrice);
    let beerToBuyNum = Number(beerToBuy);
    let wineToBuyNum = Number(wineToBuy);
    let rakiaToBuyNum = Number(rakiaToBuy);
    let whiskeyToBuyNum = Number(whiskeyToBuy);

    let rakiaPrice = (whiskeyPriceNum * 0.50);
    let beerPrice = (rakiaPrice * 0.20);
    let winePrice = (rakiaPrice * 0.60);
    

    let totalBeerPrice = beerPrice * beerToBuyNum;
    let totalWhiskeyPrice = whiskeyPriceNum * whiskeyToBuyNum;
    let totalWinePrice = winePrice * wineToBuyNum;
    let totalRakiaPrice = rakiaPrice * rakiaToBuyNum;

    let totalPriceForEverything = ((totalBeerPrice + totalWhiskeyPrice + totalWinePrice + totalRakiaPrice).toFixed(2));

    console.log(totalPriceForEverything);
    
}

solve(50, 10, 3.5, 6.5, 1);