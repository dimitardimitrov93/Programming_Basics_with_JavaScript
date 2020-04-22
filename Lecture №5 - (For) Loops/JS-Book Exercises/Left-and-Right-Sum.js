function solve() {
    let num = arguments[0];
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 1; i <= num; i++) {
        leftSum += arguments[i];
    }

    for (let i = 3; i < arguments.length; i++) {
        rightSum += arguments[i];
    }

    let difference = Math.abs(leftSum - rightSum);

    if (leftSum == rightSum) {
        console.log(`Yes, sum = ${leftSum}`);
        
    } else {
        console.log(`No, diff = ${difference}`);
        
    }
}

solve(2, 10, 90, 60, 40);
solve(2, 90, 9, 50, 50);