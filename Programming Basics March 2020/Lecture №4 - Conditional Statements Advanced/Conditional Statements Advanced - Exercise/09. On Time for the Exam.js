function solve(
  inputExamHour,
  inputExamMinute,
  inputHourOfArrival,
  inputMinuteOfArrival
) {
  let examHour = Number(inputExamHour);
  let examMinute = Number(inputExamMinute);
  let hourOfArrival = Number(inputHourOfArrival);
  let minuteOfArrival = Number(inputMinuteOfArrival);

  let examHourConverted = examHour * 60;
  let totalExamMinutes = examHourConverted + examMinute;

  let arrivalHourConverted = hourOfArrival * 60;
  let totalArrivalMinutes = arrivalHourConverted + minuteOfArrival;

  let differenceInHours = Math.floor(
    Math.abs((totalExamMinutes - totalArrivalMinutes) / 60)
  );
  let differenceInMinutes = Math.abs(
    (totalExamMinutes - totalArrivalMinutes) % 60
  );

  if (differenceInHours >= 1 && differenceInMinutes < 10) {
    differenceInMinutes = "0" + differenceInMinutes;
  }

  if (
    totalExamMinutes >= totalArrivalMinutes &&
    totalExamMinutes - totalArrivalMinutes <= 30
  ) {
    console.log(`On time`);
    console.log(`${differenceInMinutes} minutes before the start`);
  } else if (
    totalExamMinutes > totalArrivalMinutes &&
    totalExamMinutes - totalArrivalMinutes > 30 &&
    totalExamMinutes - totalArrivalMinutes <= 59
  ) {
    console.log(`Early`);
    console.log(`${differenceInMinutes} minutes before the start`);
  } else if (
    totalExamMinutes > totalArrivalMinutes &&
    totalExamMinutes - totalArrivalMinutes > 59
  ) {
    console.log(`Early`);
    console.log(
      `${differenceInHours}:${differenceInMinutes} hours before the start`
    );
  } else if (
    totalExamMinutes < totalArrivalMinutes &&
    Math.abs(totalExamMinutes - totalArrivalMinutes) <= 59
  ) {
    console.log(`Late`);
    console.log(`${differenceInMinutes} minutes after the start`);
  } else if (
    totalExamMinutes < totalArrivalMinutes &&
    Math.abs(totalExamMinutes - totalArrivalMinutes) > 59
  ) {
    console.log(`Late`);
    console.log(
      `${differenceInHours}:${differenceInMinutes} hours after the start`
    );
  }
}

solve(14, 0, 13, 55);
