function solve() {

    let result = 0;

    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            result = i * j;
            console.log(`${i} * ${j} = ${result}`);
        }
    }
}

solve();