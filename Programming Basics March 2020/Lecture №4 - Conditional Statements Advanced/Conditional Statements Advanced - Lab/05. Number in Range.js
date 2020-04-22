function solve(inputNum) {
  let number = Number(inputNum);

  if (number >= -100 && number <= 100 && number != 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

solve(-30);
