function solve(flowerTypeInput, numberInput, seasonInput) {
    let flowerType = flowerTypeInput;
    let number = Number(numberInput);
    let season = seasonInput;

    let honeyFromFlower = 0;
    let producedHoney = 0;

    if (season == "Spring") {
        switch (flowerType) {
            case "Sunflower":
                honeyFromFlower = 10;
            break;
            case "Daisy":
                honeyFromFlower = 12 + (12 * 0.1);
            break;
            case "Lavender":
                honeyFromFlower = 12;  
            break;
            case "Mint":
                honeyFromFlower = 10 + (10 * 0.1);
            break;  
        }
        producedHoney += (number * honeyFromFlower);
    } else if (season == "Summer") {
        switch (flowerType) {
            case "Sunflower":
                honeyFromFlower = 8;
            break;
            case "Daisy":
                honeyFromFlower = 8;
            break;
            case "Lavender":
                honeyFromFlower = 8;  
            break;
            case "Mint":
                honeyFromFlower = 12;
            break;  
        }
        producedHoney += (number * honeyFromFlower) + ((number * honeyFromFlower) * 0.1);
    } else if (season == "Autumn") {
        switch (flowerType) {
            case "Sunflower":
                honeyFromFlower = 12;
            break;
            case "Daisy":
                honeyFromFlower = 6;
            break;
            case "Lavender":
                honeyFromFlower = 6;  
            break;
            case "Mint":
                honeyFromFlower = 6;
            break;  
        }
        producedHoney += (number * honeyFromFlower) * 0.95;
    }
    console.log(`Total honey harvested: ${producedHoney.toFixed(2)}`);
}

solve("Sunflower", "11", "Autumn");