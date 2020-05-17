function solve(input) {

    let word = input.shift();
    let mostPowerfulWord = word;

    let sum = 0;

    while (word != "End of words") {
        let currentSum = 0;
        for (let i = 0; i < word.length; i++) {
            let currentLetterValue = Number(word.charCodeAt(i));
            currentSum += currentLetterValue;
        }

        if (word[0] == "a" || word[0] == "A" || word[0] == "e" || word[0] == "E" || word[0] == "i" || word[0] == "I" || word[0] == "o" || word[0] == "O" || word[0] == "u" || word[0] == "U" || word[0] == "y" || word[0] == "Y") {
            currentSum *= word.length;
        } else {
            currentSum = Math.floor(currentSum / word.length);
        }

        if (currentSum >= sum) {
            mostPowerfulWord = word;
            sum = currentSum;
        }

        word = input.shift();
    }
    console.log(`The most powerful word is ${mostPowerfulWord} - ${sum}`);
}

solve(["The", "Most", "Powerful", "Word", "Is", "Experience", "End of words"]);