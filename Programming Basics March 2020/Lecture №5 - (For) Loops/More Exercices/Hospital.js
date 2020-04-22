function solve(input) {
  let timePeriod = Number(input.shift());
  let doctors = 7;
  let treatedPatients = 0;
  let untreatedPatients = 0;
  let currentDay = 1;

  for (let i = 0; i < timePeriod; i++) {
    patientsForTheDay = Number(input.shift());

    if (currentDay % 3 == 0 && untreatedPatients > treatedPatients) {
      doctors += 1;
    }

    if (patientsForTheDay <= doctors) {
      treatedPatients += patientsForTheDay;
    }

    if (patientsForTheDay > doctors) {
      treatedPatients += doctors;
      untreatedPatients += Math.abs(patientsForTheDay - doctors);
    }

    currentDay++;
  }

  console.log(`Treated patients: ${treatedPatients}.`);
  console.log(`Untreated patients: ${untreatedPatients}.`);
}

solve(["4", "7", "27", "9", "1"]);
solve(["6", "25", "25", "25", "25", "25", "2"]);
solve(["3", "7", "7", "7"]);
