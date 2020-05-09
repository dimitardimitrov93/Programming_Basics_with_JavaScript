function solve(input) {

    let wallHeight = Number(input.shift());
    let wallWidth = Number(input.shift());

    let wallSizeInSqM = wallHeight * wallWidth;

    let uncoveredPartsPercent = (Number(input.shift())) / 100;

    let areaToCover = wallSizeInSqM * 4;
    let totalAreaToCover = Math.ceil(areaToCover - (areaToCover * uncoveredPartsPercent));

    let totalAreaCovered = 0;

    let paintQuantityInLiters = input.shift();

    while (paintQuantityInLiters != "Tired!") {
        paintQuantityInLiters = Number(paintQuantityInLiters);

        totalAreaCovered += paintQuantityInLiters;

        if (totalAreaCovered >= totalAreaToCover) {
            paintQuantityInLiters = Number(input.shift());
            if (paintQuantityInLiters > 0) {
                totalAreaCovered += paintQuantityInLiters;
            }
            break;
        }

        paintQuantityInLiters = input.shift();
    }

    let difference = Math.abs(totalAreaCovered - totalAreaToCover);

    if (paintQuantityInLiters == "Tired!") {
        console.log(`${difference} quadratic m left.`);
    } else if (totalAreaCovered > totalAreaToCover) {
        console.log(`All walls are painted and you have ${difference} l paint left!`);
    } else if (totalAreaCovered == totalAreaToCover) {
        console.log(`All walls are painted! Great job, Pesho!`);
    }
}

// solve([ '3', '5', '10', '2', '3', '4', 'Tired!' ]);
solve([ '2', '3', '25', '6', '7', '8', '8' ]);