function sleepyCat(inputDaysOff) {
  let daysOff = Number(inputDaysOff);

  let workingDays = 365 - daysOff;
  let workingDaysPlayMinutes = workingDays * 63;
  let daysOffPlayMinutes = daysOff * 127;
  let neededMinutesForSleepPerYear = 30000;

  let totalPlayMinutes = workingDaysPlayMinutes + daysOffPlayMinutes;
  let differenceInMinutes = Math.abs(
    totalPlayMinutes - neededMinutesForSleepPerYear
  );
  let differenceInHours = Math.trunc(differenceInMinutes / 60);
  let finalDifferenceInMinutes = differenceInMinutes % 60;

  if (totalPlayMinutes > neededMinutesForSleepPerYear) {
    console.log(`Tom will run away`);
    console.log(`${differenceInHours} hours and ${finalDifferenceInMinutes} minutes more for play`);
  } else {
    console.log(`Tom sleeps well`);
    console.log(`${differenceInHours} hours and ${finalDifferenceInMinutes} minutes less for play`);
  }
}

sleepyCat (113);