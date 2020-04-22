function solve(inputR) {

    let r = Number(inputR);

    let calculatedArea = (Math.PI * Math.pow(r, 2)).toFixed(2);
    let calculatedPerimeter = (2 * Math.PI * r).toFixed(2);

    console.log(calculatedArea);
    console.log(calculatedPerimeter);

}

solve(3);