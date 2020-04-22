function solve(input) {
  let cargoTransportationNum = Number(input.shift());
  let currentCargoWeight = Number(input.shift());
  let microbusPricePerTon = 200;
  let truckPricePerTon = 175;
  let trainPricePerTon = 120;

  let priceForTransportation = 0;

  let microbusCarriedCargo = 0;
  let truckCarriedCargo = 0;
  let trainCarriedCargo = 0;

  let microbusCargoPercent = 0;
  let truckCargoPercent = 0;
  let trainCargoPercent = 0;

  let totalTonage = 0;
  let averagePricePerTon = 0;

  for (let i = 0; i < cargoTransportationNum; i++) {
    if (currentCargoWeight <= 3) {
      priceForTransportation += currentCargoWeight * microbusPricePerTon;
      microbusCarriedCargo += currentCargoWeight;
    } else if (currentCargoWeight >= 4 && currentCargoWeight <= 11) {
      priceForTransportation += currentCargoWeight * truckPricePerTon;
      truckCarriedCargo += currentCargoWeight;
    } else if (currentCargoWeight >= 12) {
      priceForTransportation += currentCargoWeight * trainPricePerTon;
      trainCarriedCargo += currentCargoWeight;
    }

    totalTonage += currentCargoWeight;

    currentCargoWeight = Number(input.shift());
  }

  averagePricePerTon = (priceForTransportation / totalTonage).toFixed(2);

  microbusCargoPercent = ((microbusCarriedCargo / totalTonage) * 100).toFixed(2);
  truckCargoPercent = ((truckCarriedCargo / totalTonage) * 100).toFixed(2);
  trainCargoPercent = ((trainCarriedCargo / totalTonage) * 100).toFixed(2);

  console.log(averagePricePerTon);
  console.log(`${microbusCargoPercent}%`);
  console.log(`${truckCargoPercent}%`);
  console.log(`${trainCargoPercent}%`);
}

solve(['4', '1', '5', '16', '3']);