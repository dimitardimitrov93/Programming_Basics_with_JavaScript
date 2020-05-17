function solve(input) {

    let footballTeamName = input.shift();
    let playedGamesNum = Number(input.shift());

    let totalPoints = 0;
    let winsCounter = 0;
    let lossCounter = 0;
    let drawCounter = 0;

    if (playedGamesNum > 0) {
        for (let i = 0; i < playedGamesNum; i++) {

            let gameResult = input.shift();
    
            if (gameResult == "W") {
                totalPoints += 3;
                winsCounter++;
            } else if (gameResult == "D") {
                totalPoints += 1;
                drawCounter++;
            } else if (gameResult == "L") {
                lossCounter++;
            }
        }

        let winsPercent = (winsCounter / playedGamesNum) * 100;

        console.log(`${footballTeamName} has won ${totalPoints} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${winsCounter}`);
        console.log(`## D: ${drawCounter}`);
        console.log(`## L: ${lossCounter}`);
        console.log(`Win rate: ${winsPercent.toFixed(2)}%`);
    } else {
        console.log(`${footballTeamName} hasn't played any games during this season.`);
    }
}

solve(["Liverpool", "10", "W", "D", "D", "W", "L", "W", "D", "D", "W", "W"]);
