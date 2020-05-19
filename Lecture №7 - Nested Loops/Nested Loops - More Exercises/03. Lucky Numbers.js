function solve(input) {
    
    let inputNumber = Number(input.shift());

    let printLine = "";

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {
                    if (((i + j) == (k + l)) && (inputNumber % (i + j) == 0)) {
                        printLine += `${i}${j}${k}${l} `
                    }
                }
            }
        }
    }
    console.log(printLine);
}

solve(['3']);