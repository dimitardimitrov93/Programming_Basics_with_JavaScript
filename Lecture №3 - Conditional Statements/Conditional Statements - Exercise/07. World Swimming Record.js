function solve(recordInSeconds, distanceInMeters, timeForOneMeterSwimmingInSeconds) {

    recordInSeconds = Number(recordInSeconds);
    distanceInMeters = Number(distanceInMeters);
    timeForOneMeterSwimmingInSeconds = Number(timeForOneMeterSwimmingInSeconds);

    let defaultSwimmingTimeInSeconds = distanceInMeters * timeForOneMeterSwimmingInSeconds;
    let delayInSeconds = Math.floor(distanceInMeters / 15) * 12.5;
    let message = "";

    let totalSwimmingTimeInseconds = defaultSwimmingTimeInSeconds + delayInSeconds;
    let difference = totalSwimmingTimeInseconds - recordInSeconds;


    if (totalSwimmingTimeInseconds < recordInSeconds) {

        message = `Yes, he succeeded! The new world record is ${totalSwimmingTimeInseconds.toFixed(2)} seconds.`;
    } else {

        message = `No, he failed! He was ${difference.toFixed(2)} seconds slower.`;
    }

    console.log(message);
    
}

solve(55555.67, 3017, 5.03);