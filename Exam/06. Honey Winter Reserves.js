function solve(input) {

    let requiredHoney = Number(input.shift());
    let beeName = input.shift();

    let totalHoney = 0;
    let difference = 0;

    while (beeName != "Winter has come") {
        let totalHoneyPerBee = 0;

        for (let i = 1; i <= 6; i++) {
            let gatheredHoney = Number(input.shift());
            totalHoneyPerBee += gatheredHoney;
        }

        if (totalHoneyPerBee < 0) {
            console.log(`${beeName} was banished for gluttony`);
        }

        totalHoney += totalHoneyPerBee;
        difference = Math.abs(totalHoney - requiredHoney);

        if (totalHoney >= requiredHoney) {
            break;
        }

        beeName = input.shift();
    }

    if (totalHoney >= requiredHoney) {
        console.log(`Well done! Honey surplus ${difference.toFixed(2)}.`);
    } else {
        console.log(`Hard Winter! Honey needed ${difference.toFixed(2)}.`);
    }
}

solve([
    '1000',
    'Maya',
    '-50',
    '-10',
    '-20.70',
    '20.40',
    '10.30',
    '40',
    'Yama',
    '50',
    '10',
    '20',
    '30',
    '100',
    '100',
    'Winter has come'
  ]);
