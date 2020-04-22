function clock() {
  let hourCount = 23;
  let minuteCount = 59;

  for (let i = 0; i <= hourCount; i++) {
    if (i < 10) {
      i = "0" + i;
    }
    for (let j = 0; j <= minuteCount; j++) {
      if (j < 10) {
        j = "0" + j;
      }
      console.log(`${i} : ${j}`);
    }
  }
}

clock();
