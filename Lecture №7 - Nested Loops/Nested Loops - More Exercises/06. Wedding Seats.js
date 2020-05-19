function solve(input) {
    
    let firstSector = "A";
    let lastSector = input.shift();
    let rowsNumInSectorA = Number(input.shift());
    let currentRowsNumInSector = rowsNumInSectorA;

    let oddRowSeatsNum = Number(input.shift());
    let evenRowSeatsNum = oddRowSeatsNum + 2;

    let firstSectorInteger = firstSector.charCodeAt();
    let lastSectorInteger = lastSector.charCodeAt();

    let printLine = "";
    let seatsNum = 0;

    for (let i = firstSectorInteger; i <= lastSectorInteger; i++) {
        for (let j = 1; j <= currentRowsNumInSector; j++) {
            if (j % 2 == 0) {
                for (let k = 97; k < (97 + evenRowSeatsNum); k++) {
                    let currentRow = String.fromCharCode(i);
                    let currentSeat = String.fromCharCode(k);
                    seatsNum++;

                    printLine = `${currentRow}${j}${currentSeat} `;
                    console.log(printLine);
                }
            } else {
                for (let l = 97; l < (97 + oddRowSeatsNum); l++) {
                    let currentRow = String.fromCharCode(i);
                    let currentSeat = String.fromCharCode(l);
                    seatsNum++;

                    printLine = `${currentRow}${j}${currentSeat} `;
                    console.log(printLine);
                }
            }
        }
        currentRowsNumInSector++;
    }
    console.log(seatsNum);
}

solve([ 'B', '3', '2' ]);