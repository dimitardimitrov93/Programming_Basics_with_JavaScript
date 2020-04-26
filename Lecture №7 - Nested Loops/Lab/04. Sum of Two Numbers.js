function solve(input) {
    let intervalStart = Number(input.shift());
    let intervalEnd = Number(input.shift());
    let magicNumber = Number(input.shift());

    let matchCounter = 0;
    let noMatchCounter = 0;
    let totalCounter = 0;

    for (let i = intervalStart; i <= intervalEnd; i++) {
        for (let j = intervalStart; j <= intervalEnd; j++) {
            if ((i + j) == magicNumber) {
                matchCounter++;
                totalCounter++;
                console.log(`Combination N:${totalCounter} (${i} + ${j} = ${magicNumber})`);
                break;
            } else {
                noMatchCounter++;
                totalCounter++;
            }
        }

        if ((matchCounter == 0) && (i == intervalEnd)) {
            console.log(`${totalCounter} combinations - neither equals ${magicNumber}`);
            break;
        } else if (matchCounter == 1) {
            break;
        }
    }

}

// solve([ '1', '10', '5' ]);
// solve([ '23', '24', '20' ]);
// solve([ '88', '888', '1000' ]);
solve([ '88', '888', '2000' ]);