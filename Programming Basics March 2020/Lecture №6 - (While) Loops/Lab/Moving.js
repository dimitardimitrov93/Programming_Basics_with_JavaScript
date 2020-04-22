function solve(input) {
  let boxSizeM3 = 1 * 1 * 1;
  let apartmentLength = Number(input.shift());
  let apartmentWidth = Number(input.shift());
  let apartmentHeight = Number(input.shift());

  let currentCounter = 1;
  let counter = input.length;

  let apartmentSizeM3 = apartmentLength * apartmentWidth * apartmentHeight;
  let spaceLeft = apartmentSizeM3;

  let currentNumOfBoxes = 0;

  while (currentCounter <= counter) {
    currentNumOfBoxes = input.shift();

    if (currentNumOfBoxes == "Done" || spaceLeft <= 0) {
      break;
    }

    currentNumOfBoxes = Number(currentNumOfBoxes);
    spaceLeft -= currentNumOfBoxes * boxSizeM3;

    currentCounter++;
  }

  if (currentNumOfBoxes == "Done" && spaceLeft > 0) {
    console.log(`${spaceLeft} Cubic meters left.`);
  } else {
    console.log(
      `No more free space! You need ${Math.abs(spaceLeft)} Cubic meters more.`
    );
  }
}

solve(["10", "10", "2", "20", "20", "20", "20", "122", ""]);
solve(["10", "1", "2", "4", "6", "Done"]);
