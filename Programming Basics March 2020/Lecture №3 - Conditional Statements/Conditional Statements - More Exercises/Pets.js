function pets(inputVacationDays, inputFoodLeftKg, inputFoodForDogKgPd, inputFoodForCatKgPd, inputFoodForTortoiseKgPd) {

    let vacationDays = (inputVacationDays);
    let foodLeftKg = (inputFoodLeftKg);
    let foodForDogKgPd = (inputFoodForDogKgPd);
    let foodForCatKgPd = (inputFoodForCatKgPd);
    let foodForTortoiseKgPd = (inputFoodForTortoiseKgPd);

    let requiredFoodForDog = vacationDays * foodForDogKgPd;
    let requiredFoodForCat = vacationDays * foodForCatKgPd;
    let requiredFoodForTortoise = (vacationDays * foodForTortoiseKgPd) / 1000;

    let totalFoodForAnimalsRequired = requiredFoodForDog + requiredFoodForCat + requiredFoodForTortoise;

    let difference = Math.abs(foodLeftKg - totalFoodForAnimalsRequired);

    if (totalFoodForAnimalsRequired <= foodLeftKg) {
        console.log(`${Math.floor(difference)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(difference)} more kilos of food are needed.`);
        
    }

}

pets(2, 10, 1, 1, 1200);
pets(5, 10, 2.1, 0.8, 312);