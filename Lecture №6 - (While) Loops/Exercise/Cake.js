function solve(input) {
  let cakeWidth = Number(input.shift());
  let cakeLength = Number(input.shift());
  let cakeSizeCm3 = cakeLength * cakeWidth;
  let pieceOfCakeCm3 = 1 * 1;
  let currentEatenPieces = input.shift();
  let currentCakeSizeCm3 = cakeSizeCm3;
  let totalEatenPieces = 0;

  while (currentCakeSizeCm3 > 0 && currentEatenPieces != "STOP") {
    currentEatenPieces = Number(currentEatenPieces);
    currentCakeSizeCm3 -= currentEatenPieces * pieceOfCakeCm3;

    currentEatenPieces = input.shift();
  }

  if (currentCakeSizeCm3 > 0) {
    console.log(`${Math.abs(currentCakeSizeCm3)} pieces are left.`);
  } else {
    console.log(
      `No more cake left! You need ${Math.abs(currentCakeSizeCm3)} pieces more.`
    );
  }
}

solve(["10", "2", "2", "4", "6", "STOP"]);
solve(["10", "10", "20", "20", "20", "20", "21"]);
