function solve(input) {
    let requiredNylon = Number(input.shift());
    let requiredPaint = Number(input.shift());
    let requiredDiluent = Number(input.shift());
    let workingHours = Number(input.shift());

    let additionalPaint = requiredPaint * 0.1;
    let additionalNylon = 2;

    let nylonPrice = 1.5;
    let paintPrice = 14.5;
    let diluentPrice = 5;

    let moneyForPlasticBags = 0.4;

    let moneyForNylon = (requiredNylon + additionalNylon) * nylonPrice;
    let moneyForPaint = (requiredPaint + additionalPaint) * paintPrice;
    let moneyForDiluent = requiredDiluent * diluentPrice;
    let currentExpenses = moneyForPlasticBags + moneyForNylon + moneyForPaint + moneyForDiluent;
    let moneyForLabor = workingHours * (currentExpenses * 0.3);

    let totalExpenses = currentExpenses + moneyForLabor;

    console.log(`Total expenses: ${totalExpenses.toFixed(2)} lv.`);
    
}

solve([ '10', '11', '4', '8' ]);