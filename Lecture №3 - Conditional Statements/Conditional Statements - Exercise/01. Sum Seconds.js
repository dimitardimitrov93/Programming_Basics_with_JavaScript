function solve(firstContestantTime, secondContestantTime, thirdContestantTime) {

    firstContestantTime = Number(firstContestantTime);
    secondContestantTime = Number(secondContestantTime);
    thirdContestantTime = Number(thirdContestantTime);

    let timeSum = firstContestantTime + secondContestantTime + thirdContestantTime;
    let Minutes = Math.trunc(timeSum / 60);
    let Seconds = timeSum % 60;

    if (Seconds < 10) {

        Seconds = "0" + Seconds;
    }

    let result = `${Minutes}:${Seconds}`;

    console.log(result);
    
}

solve(50, 50, 49);