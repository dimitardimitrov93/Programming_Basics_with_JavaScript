function solve(input) {

    let playerName = input.shift();
    let playedGamesNum = Number(input.shift());
    let pointsSum = 0;

    let volleyballCounter = 0;
    let tennisCounter = 0;
    let badmintonCounter = 0;

    let currentPoints = 0;

    let volleyballPoints = 0;
    let tennisPoints = 0;
    let badmintonPoints = 0;

    for (let i = 1; i <= playedGamesNum; i++) {
        let gameName = input.shift();
        let pointsNum = Number(input.shift());

        if (gameName == "volleyball") {
            currentPoints = (pointsNum + (pointsNum * 0.07));
            volleyballPoints += currentPoints;
            pointsSum += currentPoints;
            volleyballCounter++;
        } else if (gameName == "tennis") {
            currentPoints = (pointsNum + (pointsNum * 0.05));
            tennisPoints += currentPoints;
            pointsSum += currentPoints;
            tennisCounter++;
        } else if (gameName == "badminton") {
            currentPoints = (pointsNum + (pointsNum * 0.02));
            badmintonPoints += currentPoints;
            pointsSum += currentPoints;
            badmintonCounter++;
        }
    }

    let averageVolleyPoints = Math.floor(volleyballPoints / volleyballCounter);
    let averageTennisPoints = Math.floor(tennisPoints / tennisCounter);
    let averageBadmintonPoints = Math.floor(badmintonPoints / badmintonCounter);

    if ((averageVolleyPoints >= 75) && (averageTennisPoints >= 75) && (averageBadmintonPoints >= 75)) {
        console.log(`Congratulations, ${playerName}! You won the cruise games with ${Math.floor(pointsSum)} points.`);
    } else {
        console.log(`Sorry, ${playerName}, you lost. Your points are only ${Math.floor(pointsSum)}.`);
    }
}

solve(['Annie', '5', 'badminton',  '34', 'tennis', '76', 'badminton', '10', 'volleyball', '62', 'badminton', '56']);
