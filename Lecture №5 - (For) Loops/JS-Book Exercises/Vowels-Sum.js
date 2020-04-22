function solve(inputLetter) {
  let sum = 0;

  for (let i = 0; i <= inputLetter.length; i++) {
    switch (inputLetter[i]) {
        case "a":
        sum += 1;
        break;
        case "e":
        sum += 2;
        break;
        case "i":
        sum += 3;
        break;
        case "o":
        sum += 4;
        break;
        case "u":
        sum += 5;
        break;
    }
  }
  console.log(sum);
}

solve("hello");
solve("bamboo");
solve("hi");
solve("beer");
