function solve(figureType, firstSize, secondSize) {
  firstSize = Number(firstSize);
  secondSize = Number(secondSize);

  if (figureType == `square`) {
    let area = firstSize * firstSize;
    console.log(`The area of the square is: ${area.toFixed(3)}`);
  } else if (figureType == `rectangle`) {
    let area = firstSize * secondSize;

    console.log(`The area of the rectangle is: ${area.toFixed(3)}`);
  } else if (figureType == `circle`) {
    let area = Math.PI * Math.pow(firstSize, 2);

    console.log(`The radius of the circle is: ${area.toFixed(3)}`);
  } else if (figureType == `triangle`) {
    let area = (firstSize * secondSize) / 2;

    console.log(`The area of the triangle is: ${area.toFixed(3)}`);
  } else {
    console.log(`Not supported!`);
  }
}

solve(`rectangle`, 7, 2.5);
