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
      for (let k = 0; k <= 59; k++) {
        if (k < 10) {
          k = "0" + k;
        }
        console.log(`${i} : ${j} : ${k}`);
      }
    }
  }
}

clock();