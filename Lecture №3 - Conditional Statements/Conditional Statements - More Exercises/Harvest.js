function harvest(inputSqMVineyard, inputKgGrapesForSqM, inputNeededLitersOfWine, inputNumberOfWorkers) {

  let sqMVineyard = Number(inputSqMVineyard);
  let kgGrapesForSqM = Number(inputKgGrapesForSqM);
  let neededLitersOfWine = Number(inputNeededLitersOfWine);
  let numberOfWorkers = Number(inputNumberOfWorkers);

  let totalGrapesFromVineyard = sqMVineyard * kgGrapesForSqM;
  let grapesForWine = totalGrapesFromVineyard * 0.4;
  let litersWineFromGrapes = grapesForWine / 2.5;

  let difference = Math.abs(litersWineFromGrapes - neededLitersOfWine);
  let winePerWorker = difference / numberOfWorkers;

  if (litersWineFromGrapes >= neededLitersOfWine) {
    litersWineFromGrapes = Math.floor(litersWineFromGrapes);
    difference = Math.ceil(difference);
    winePerWorker = Math.ceil(winePerWorker);
    console.log(`Good harvest this year! Total wine: ${litersWineFromGrapes} liters.`);
    console.log(`${difference} liters left -> ${winePerWorker} liters per person.`);
  } else {
    difference = Math.floor(difference);
    console.log(`It will be a tough winter! More ${difference} liters wine needed.`);
  }
}

harvest(650, 2, 175, 3);
harvest(1020, 1.5, 425, 4);