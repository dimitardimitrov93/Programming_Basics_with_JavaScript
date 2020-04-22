function solve(inputDegreesInCelsius) {

    let degreesInCelsius = Number(inputDegreesInCelsius);
    let degreesInFahrenheit = (degreesInCelsius * 1.8000) + 32;

    console.log(degreesInFahrenheit.toFixed(2));
    
}

solve(25);