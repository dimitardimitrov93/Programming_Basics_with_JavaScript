function solve(inpuB1, inputB2, inputH) {

    let b1 = Number(inpuB1);
    let b2 = Number(inputB2);
    let h = Number(inputH);

    let area = (b1 + b2) * (h /2);

    console.log(area.toFixed(2));

}

solve(8, 13, 7);