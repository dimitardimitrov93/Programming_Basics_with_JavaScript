function oddOrEven(number) {
  number = Number(number);

  if (number % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

oddOrEven(3);