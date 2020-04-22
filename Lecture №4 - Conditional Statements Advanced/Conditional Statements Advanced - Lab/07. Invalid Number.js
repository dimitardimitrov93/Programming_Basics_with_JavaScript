function invalidNumber(num) {
  let number = Number(num);

  if ((number >= 100 && number <= 200) || number == 0) {
  } else {
    console.log("invalid");
  }
}

invalidNumber(100);
