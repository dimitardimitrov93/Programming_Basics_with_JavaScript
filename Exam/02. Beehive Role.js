function solve(intelligenceInput, strengthInput, genderInput) {
    
    let intelligence = Number(intelligenceInput);
    let strength = Number(strengthInput);
    let gender = genderInput;

    beehiveRole = "";

    if ((intelligence >= 80) && (strength >= 80) && (gender == "female")) {
        beehiveRole = "Queen Bee";
    } else if (intelligence >= 80) {
        beehiveRole = "Repairing Bee";
    } else if (intelligence >= 60) {
        beehiveRole = "Cleaning Bee";
    } else if ((strength >= 80) && (gender == "male")) {
        beehiveRole = "Drone Bee";
    } else if (strength >= 60) {
        beehiveRole = "Guard Bee";
    } else {
        beehiveRole = "Worker Bee";
    }
    console.log(beehiveRole);
}

solve(82, 81, "female");