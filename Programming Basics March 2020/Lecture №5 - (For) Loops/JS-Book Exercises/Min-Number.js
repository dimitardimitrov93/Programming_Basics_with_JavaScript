function solve(args) {
  let num = args[0];
  let currentMinNum = 0;
  let minNum = arguments[1];

  for (let i = 1; i <= arguments.length; i++) {
    currentMinNum = arguments[i];
    if (minNum > currentMinNum) {
      minNum = currentMinNum;
    }
  }

  console.log(`min = ${minNum}`);
}

solve(7, 100, 99, 88, 101, -10, -5, -15);