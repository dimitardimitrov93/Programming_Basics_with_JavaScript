function passwordGenerator(input) {
    let firstNum = Number(input.shift());
    let secondNum = Number(input.shift());

    let printLine = "";
    
    let thirdChar = 0;

    for (let i = 1; i <= firstNum; i++) {
        for (let j = 1; j <= firstNum; j++) {
            let firstLetter = 97;
            for (let k = 1; k <= secondNum; k++) {
                let secondLetter = 97;
                for (let l = 1; l <= secondNum; l++) {
                    for (let m = 1; m <= firstNum; m++) {
                        if ((m > i) && (m > j)) {
                            thirdChar = m;
                            printLine += `${i}${j}${String.fromCharCode(firstLetter)}${String.fromCharCode(secondLetter)}${thirdChar} `;
                        }
                    }
                    secondLetter++;
                }
                firstLetter++;
            }
        }
    }
    console.log(printLine);
}

passwordGenerator([ '2', '4' ]);
// passwordGenerator([ '3', '1' ]);
// passwordGenerator([ '3', '2' ]);