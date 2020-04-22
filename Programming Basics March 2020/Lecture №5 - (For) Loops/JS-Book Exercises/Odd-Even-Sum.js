function solve() {
    let num = arguments[0];
    evenSum = 0;
    oddSum = 0;

    for (let i = 1; i <= num; i++) {
        currentNum = arguments[i];
        if (i % 2 == 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }

    let difference = Math.abs(evenSum - oddSum);

    if (evenSum == oddSum) {
        console.log(`Yes, sum = ${evenSum}`);
    } else {
        console.log(`No, diff = ${difference}`);
    }
    
}

solve(4, 10, 50, 60, 20);
solve(4, 3, 5, 1, -2);
solve(3, 5, 8, 1);