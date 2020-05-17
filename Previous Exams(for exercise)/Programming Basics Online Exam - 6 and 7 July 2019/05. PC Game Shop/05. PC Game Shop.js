function solve(input) {
    let gamesNum = Number(input.shift());

    let hearthstoneCounter = 0;
    let fortniteCounter = 0;
    let overwatchCounter = 0;
    let othersCounter = 0;
    
    for (let i = 1; i <= gamesNum; i++) {
        let gameName = input.shift();

        if (gameName == "Hearthstone") {
            hearthstoneCounter++;
        } else if (gameName == "Fornite") {
            fortniteCounter++;
        } else if (gameName == "Overwatch") {
            overwatchCounter++;
        } else {
            othersCounter++;
        }
    }

    let hearthstonePercent = (hearthstoneCounter / gamesNum) * 100;
    let fortnitePercent = (fortniteCounter / gamesNum) * 100;
    let overwatchPercent = (overwatchCounter / gamesNum) * 100;
    let othersPercent = (othersCounter / gamesNum) * 100;

    console.log(`Hearthstone - ${hearthstonePercent.toFixed(2)}%`);
    console.log(`Fornite - ${fortnitePercent.toFixed(2)}%`);
    console.log(`Overwatch - ${overwatchPercent.toFixed(2)}%`);
    console.log(`Others - ${othersPercent.toFixed(2)}%`);
}

solve([ '4', 'Hearthstone', 'Fornite', 'Overwatch', 'Counter-Strike' ]);
// solve([ '3', 'Hearthstone', 'Diablo 2', 'Star Craft 2' ])