function transportPrice(inputKmToTravel, timeOfDay) {

    let kmToTravel = Number(inputKmToTravel);

    let taxiInitialPrice = 0.7;
    let taxiDayPrice = 0.79;
    let taxiNightPrice = 0.9;

    let busPrice = 0.09;
    let trainPrice = 0.06;

    let tripPriceWithBus = busPrice * kmToTravel;
    let tripPriceWithTrain = trainPrice * kmToTravel;
    let tripPriceWithTaxi = 0.0;

    if (timeOfDay == "day") {
        tripPriceWithTaxi = (taxiDayPrice * kmToTravel) + taxiInitialPrice;
    } else {
        tripPriceWithTaxi = (taxiNightPrice * kmToTravel) + taxiInitialPrice;
    }


    if (kmToTravel < 20) {
        console.log(tripPriceWithTaxi.toFixed(2));
    } else if ((tripPriceWithBus < tripPriceWithTaxi) && ((kmToTravel >= 20) && (kmToTravel < 100))) {
        console.log(tripPriceWithBus.toFixed(2));
    } else if ((tripPriceWithBus > tripPriceWithTaxi) && ((kmToTravel >= 20) && (kmToTravel < 100))) {
        console.log(tripPriceWithTaxi.toFixed(2));
    } else if ((tripPriceWithBus < tripPriceWithTrain) && (kmToTravel >= 100)) {
        console.log(tripPriceWithBus.toFixed(2));
    } else if ((tripPriceWithBus > tripPriceWithTrain) && (kmToTravel >= 100)) {
        console.log(tripPriceWithTrain.toFixed(2));
    } else if (((kmToTravel >= 20) || (kmToTravel >= 100)) && ((tripPriceWithBus > tripPriceWithTaxi) || (tripPriceWithTrain > tripPriceWithTaxi))) {
        console.log(tripPriceWithTaxi.toFixed(2));
    }

}

transportPrice(180, "night");