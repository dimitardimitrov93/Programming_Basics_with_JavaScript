function solve(length, width, height, percent) {
    let totalAquariumVolume = length * width * height;
    let waterVolume = totalAquariumVolume * 0.001;
    let occupationPercent = percent * 0.01;
    let totalWaterVolume = waterVolume * (1-occupationPercent);

    console.log(totalWaterVolume.toFixed(3));
    
}