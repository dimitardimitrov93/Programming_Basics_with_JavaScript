function volleyBall(year, inputHolidays, inputHomeTownWeekends) {
  let holidays = Number(inputHolidays);
  let homeTownWeekends = Number(inputHomeTownWeekends);

  let weekendsInSofia = 48 - homeTownWeekends;
  let gamesInSofia = weekendsInSofia - weekendsInSofia * 0.25;
  let gamesOnHolidays = Number((inputHolidays * 0.66666666666).toFixed(2));
  let totalGames = gamesInSofia + homeTownWeekends + gamesOnHolidays;

  if (year == "leap") {
    totalGames = totalGames + totalGames * 0.15;
  }

  console.log(Math.floor(totalGames));
}

volleyBall("leap", 300, 30);
