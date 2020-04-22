function solve(inputAge, gender) {
  let age = Number(inputAge);

  if (gender == "m" && age < 16) {
    if (age < 16) {
      console.log("Master");
    } else if (age >= 16) {
      console.log("Mr.");
    }
  } else if (gender == "f") {
    if (age < 16) {
      console.log("Miss");
    } else if (age >= 16) {
      console.log("Ms.");
    }
  }
}

solve(14, "m");
