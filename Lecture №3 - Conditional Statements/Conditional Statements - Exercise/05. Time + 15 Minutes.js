function solve(hours, minutes) {
  hours = Number(hours);
  minutes = Number(minutes);

  minutes = minutes + 15;

  if (minutes > 59) {
    hours = hours + 1;
    minutes = 0 + (minutes % 60);
  }

  if (hours >= 24) {
    hours = hours % 24;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let time = `${hours}:${minutes}`;
  console.log(time);
}

solve(1, 46);
