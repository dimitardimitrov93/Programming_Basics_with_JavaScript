function solve(input) {

    let firstLetter = input.shift();
    let secondLetter = input.shift();
    let thirdLetter = input.shift();

    let beginning = firstLetter.charCodeAt();
    let end = secondLetter.charCodeAt();
    let exclusion = thirdLetter.charCodeAt();

    let counter = 0;
    let printLine = "";

    for (let i = beginning; i <= end; i++) {
        for (let j = beginning; j <= end; j++) {
            for (let k = beginning; k <= end; k++) {
                if (i != exclusion && j != exclusion && k != exclusion) {
                    counter++;
                    firstLetter = String.fromCharCode(i);
                    secondLetter = String.fromCharCode(j);
                    thirdLetter = String.fromCharCode(k);
                    
                    printLine += `${firstLetter}${secondLetter}${thirdLetter} `;
                }
            }
        }
    }
   console.log(`${printLine}${counter}`);
}

solve(['a', 'c', 'b']);