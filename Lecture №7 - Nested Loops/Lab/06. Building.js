function solve(input) {
    
    let floors = Number(input.shift());
    let rooms = Number(input.shift());

    let printLine = "";

    for (let i = floors; i >= 1; i--) {
        if ((i == floors) || (floors == 1)) {
            for (let j = 0; j < rooms ;j++) {
                printLine += `L${i}${j} `;
            }
        } else if (i % 2 == 0) {
            for (let j = 0; j < rooms ;j++) {
                printLine += `O${i}${j} `;
            }
        }

         if ((i % 2 != 0) && (i != floors)){
            for (let j = 0; j < rooms ;j++) {
                printLine += `A${i}${j} `;
            }
        }
        console.log(printLine);
        printLine = "";
    }
    
}

solve([ '6', '4' ]);
// solve([ '9', '5' ]);
// solve([ '4', '4' ]);