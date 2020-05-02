function solve(beesNumInput, bearHPInput, bearDamageInput) {
    
    let beesNum = Number(beesNumInput);

    let bearHP = Number(bearHPInput);
    let bearDamage = Number(bearDamageInput);

    let currentBeesNum = beesNum;
    let currentBearHP = bearHP;

    let flag = false;

    while (currentBeesNum >= 100) {
        currentBeesNum -= bearDamage;

        let beesDamage = currentBeesNum * 5;
        currentBearHP -= beesDamage;

        if (currentBearHP <= 0) {
            flag = true;
            break;
        }

        if (currentBeesNum < 0) {
            currentBeesNum = 0;
        }
    }
    if (flag == false) {
        console.log(`The bear stole the honey! Bees left ${currentBeesNum}.`);
    } else {
        console.log(`Beehive won! Bees left ${currentBeesNum}.`);
    }
}

solve(200, 10000, 300);