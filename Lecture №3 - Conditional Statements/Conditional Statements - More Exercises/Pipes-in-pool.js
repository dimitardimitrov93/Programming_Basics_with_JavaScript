function solve(inputV, inputP1, inputP2, inputH) {

    let v = Number(inputV);
    let p1 = Number(inputP1);
    let p2 = Number(inputP2);
    let h = Number(inputH);

    let totalLitresFromPipes = (p1 * h) + (p2 * h);

    let p1FillPercent = (((p1 * h) / totalLitresFromPipes) * 100).toFixed(2);
    let p2FillPercent = (((p2 * h) / totalLitresFromPipes) * 100).toFixed(2);

    let poolFilledPercent = Number(((totalLitresFromPipes / v) * 100).toFixed(2));
    let overflow = Math.abs(totalLitresFromPipes - v);
    
    if (totalLitresFromPipes <= v) {
        console.log(`The pool is ${poolFilledPercent}% full. Pipe 1: ${p1FillPercent}%. Pipe 2: ${p2FillPercent}% `);
    } else {
        console.log(`For ${h} hours the pool overflows with ${overflow} liters."`);
    }
}

solve(100, 100, 100, 2.5);