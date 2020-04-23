function solve(input) {
    let budget = Number(input.shift());
    let graphicsCardsNumber = Number(input.shift());
    let cpuNumber = Number(input.shift());
    let ramMemoryNum = Number(input.shift());

    let graphicsCardPrice = 250;
    let totalPriceForAllGraphicCards = 0;
    
    let cpuPrice = 0;
    let totalPriceForAllCpu = 0;

    let ramPrice = 0;
    let totalPriceForAllRam = 0;

    let totalPriceForEverything = 0;

    let difference = 0;

    if (graphicsCardsNumber > cpuNumber) {
        graphicsCardPrice = graphicsCardPrice - (graphicsCardPrice * 0.15);
    } else {
        graphicsCardPrice = graphicsCardPrice;
    }

    totalPriceForAllGraphicCards = graphicsCardsNumber * graphicsCardPrice;

    cpuPrice = totalPriceForAllGraphicCards * 0.35;
    ramPrice = totalPriceForAllGraphicCards * 0.1;

    totalPriceForAllCpu = cpuNumber * cpuPrice;
    totalPriceForAllRam = ramMemoryNum * ramPrice;

    totalPriceForEverything = totalPriceForAllGraphicCards + totalPriceForAllCpu + totalPriceForAllRam;

    difference = Math.abs(budget - totalPriceForEverything);

    if (totalPriceForEverything <= budget) {
        console.log(`You have ${difference.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva more!`);
    }
}

solve([ '900', '2', '1', '3' ]);
solve([ '920.45', '3', '1', '1' ]);