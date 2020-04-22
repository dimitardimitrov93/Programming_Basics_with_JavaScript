function solve(number, type, resultType) {
  number = Number(number);
  let result = 0.0;

  if (type == "mm" && resultType == "cm") {
    result = number / 10;
  } else if (type == "mm" && resultType == "m") {
    result = number / 1000;
  } else if (type == "m" && resultType == "mm") {
    result = number * 1000;
  } else if (type == "m" && resultType == "cm") {
    result = number * 100;
  } else if (type == "cm" && resultType == "mm") {
    result = number * 10;
  } else if (type == "cm" && resultType == "m") {
    result = number / 100;
  }

  console.log(result.toFixed(3));
}

solve(150, "m", "cm");
