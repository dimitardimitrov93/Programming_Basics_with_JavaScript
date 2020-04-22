function firm(inputProjectRequiredHours, inputDaysForWork, inputNumberOfEmployeesExtraTime) {

    let projectRequiredHours = Number(inputProjectRequiredHours);
    let daysForWork = Number(inputDaysForWork);
    let numberOfEmployeesExtraTime = Number(inputNumberOfEmployeesExtraTime);

    let daysForTrainings = daysForWork * 0.1;
    daysForWork = daysForWork - daysForTrainings;

    let workingHours = Math.floor((daysForWork * 8) + (numberOfEmployeesExtraTime * (inputDaysForWork * 2)));

    let difference = Math.abs(workingHours - projectRequiredHours);

    if (workingHours >= projectRequiredHours) {
        console.log(`Yes!${difference} hours left.`);
    } else {
        console.log(`Not enough time!${difference} hours needed.`);
    }

}

firm(50, 5, 2);