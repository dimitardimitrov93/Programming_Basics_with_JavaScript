function solve(inputNumber) {

    let number = Number(inputNumber);
    
    for (let i = 0; i <= number; i+=2) {
        console.log(Math.pow(2, i));
    } 
}

solve(3);