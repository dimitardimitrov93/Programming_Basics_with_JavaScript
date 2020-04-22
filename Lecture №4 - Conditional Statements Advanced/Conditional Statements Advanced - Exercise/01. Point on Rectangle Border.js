function solve(x1, y1, x2, y2, x, y) {
  x1 = Number(x1);
  y1 = Number(y1);
  x2 = Number(x2);
  y2 = Number(y2);
  x = Number(x);
  y = Number(y);

  if ((x == x1 || x == x2) && y >= y1 && y <= y2) {
    console.log("Border");
  } else if ((y == y1 || y == y2) && x >= x1 && x <= x2) {
    console.log("Border");
  } else {
    console.log("Inside / Outside");
  }
}

solve(2, -3, 12, 3, 2, -1);
