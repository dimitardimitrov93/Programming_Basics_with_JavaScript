function solve(input) {

    let initialPoints = Number(input.shift());
    let currentPoints = initialPoints;

    let targetSector = "";

    let movesCounter = 0;

    while (currentPoints > 0) {
        targetSector = input.shift();
        let points = Number(input.shift());

        if (targetSector == "number section") {
            points = points;
        } else if (targetSector == "double ring") {
            points *= 2;
        } else if (targetSector == "triple ring") {
            points *= 3;
        } else if (targetSector == "bullseye") {
            movesCounter++;
            break;
        }

        movesCounter++;
        currentPoints -= points;
    }

    let difference = Math.abs(currentPoints);
    
    if (currentPoints == 0) {
        console.log(`Congratulations! You won the game in ${movesCounter} moves!`);
    } else if (targetSector == "bullseye") {
        console.log(`Congratulations! You won the game with a bullseye in ${movesCounter} moves!`);
    } else {
        console.log(`Sorry, you lost. Score difference: ${difference}.`);
    }
}

solve([ '101', 'triple ring', '7', 'double ring', '19', 'bullseye', '' ]);