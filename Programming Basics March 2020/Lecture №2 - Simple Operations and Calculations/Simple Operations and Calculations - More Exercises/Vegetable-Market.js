function solve(inputKgVegetablesPrice, inputKgFruitsPrice, inputKgVegetables, inputKgFruits) {

    let kgVegetablesPriceLeva = Number(inputKgVegetablesPrice);
    let kgFruitsPriceLeva = Number(inputKgFruitsPrice);
    let kgVegetables = Number(inputKgVegetables);
    let kgFruits = Number(inputKgFruits);

    let totalPriceForVegetablesLeva = kgVegetables * kgVegetablesPriceLeva;
    let totalPriceForFruitsLeva = kgFruits * kgFruitsPriceLeva;

    let totalPriceForAllProductsLeva = totalPriceForVegetablesLeva + totalPriceForFruitsLeva;
    let totalPriceForAllProductsEuro = (totalPriceForAllProductsLeva / 1.94).toFixed(2);

    console.log(totalPriceForAllProductsEuro);
    
 
}

solve(0.194, 19.4, 10, 10);