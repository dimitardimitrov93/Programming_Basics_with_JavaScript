function solve(input) {

    let playerName = input.shift();
    let currentPlayer = playerName;
    let playerOneResult = 0;

    let winner = "";
    let winnerPoints = 0;

    let currentPoints = 0;

    while (playerName != "Stop") {

        playerOneResult = currentPoints;

        currentPoints = 0;

        for (let i = 0; i < playerName.length; i++) {
            
            let currentNumber = Number(input.shift());
            let currentLetterValue = Number(playerName.charCodeAt(i));

            if (currentNumber === currentLetterValue) {
                pointsWon = 10;
            } else {
                pointsWon = 2;
            }

            currentPoints += pointsWon;
            currentPlayer = playerName;
        }

        if (currentPoints >= playerOneResult) {
            winner = currentPlayer;
            winnerPoints = currentPoints;
        }
        playerName = input.shift();
    }

    console.log(`The winner is ${winner} with ${winnerPoints} points!`);
    
}

// solve(["Ivan", "73", "20", "98", "110", "Ivo", "80", "65", "87", "Stop"]);
solve ([ 'Pesho', '124', '34', '111',   '97',  '99', 'Gosho', '0',  '124', '3',    '71',  '58', 'Stop' ]);