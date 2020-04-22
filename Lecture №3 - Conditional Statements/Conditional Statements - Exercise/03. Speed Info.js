function speedInfo(speed) {
  speed = Number(speed);
  let status = "";

  if (speed <= 10) {
    status = "slow";
  } else if (speed > 10 && speed <= 50) {
    status = "average";
  } else if (speed > 50 && speed <= 150) {
    status = "fast";
  } else if (speed > 150 && speed <= 1000) {
    status = "ultra fast";
  } else {
    status = "extremely fast";
  }

  console.log(status);
}

speedInfo(3500);
