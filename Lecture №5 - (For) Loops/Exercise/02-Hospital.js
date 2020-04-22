function solve() {

    let doctors = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;

    for (let i = 1; i < arguments.length; i++) {
        patientsForTheDay = arguments[i];

        if (patientsForTheDay <= doctors) {
            treatedPatients += patientsForTheDay;
        }

        if ((i == 3) && (untreatedPatients > treatedPatients)) {
            doctors += 1;
        }

        if (patientsForTheDay > doctors) {
            treatedPatients += doctors;
            untreatedPatients += Math.abs(patientsForTheDay - doctors);
        }
    }
  
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}

solve(4, 7, 27, 9, 1);
solve(6, 25, 25, 25, 25, 25, 2);