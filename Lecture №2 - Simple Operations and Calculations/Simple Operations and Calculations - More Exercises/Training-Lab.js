function solve(inputHeight, inputWidth) {

    let widthInM = Number(inputWidth);
    let heightInM = Number(inputHeight);

    let widthInCm = widthInM * 100;
    let heightInCm = heightInM * 100;
    let hallway = 100;

    let numberOfRows = Math.trunc((widthInCm - hallway)/ 70);
    let numberOfColumns = Math.trunc(heightInCm / 120);

    let workingSeats = (numberOfRows * numberOfColumns) - 3;

    console.log(workingSeats);

}

solve(15, 8.9);