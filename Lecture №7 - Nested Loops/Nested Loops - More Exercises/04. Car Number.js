function solve(input) {
    
    let beginning = Number(input.shift());
    let end = Number(input.shift());

    let printLine = "";

    for (let i = beginning; i <= end; i++) {
        for (let j = beginning; j <= end; j++) {
            for (let k = beginning; k <= end; k++) {
                for (let l = beginning; l <= end; l++) {
                    if (((i % 2 == 0) && (l % 2 != 0)) && (i > l) && ((j + k) % 2 == 0)) {
                        printLine += `${i}${j}${k}${l} `;
                    } else if (((i % 2 != 0) && (l % 2 == 0)) && (i > l) && ((j + k) % 2 == 0)) {
                        printLine += `${i}${j}${k}${l} `;
                    }
                }
            }
        }
    }
    console.log(printLine);
}

solve([ '2', '3', '' ]);