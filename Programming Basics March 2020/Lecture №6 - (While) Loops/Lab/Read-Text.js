function readText(input) {
  let currentWord = input.shift();

  while (currentWord !== "Stop") {
    console.log(currentWord);
    currentWord = input.shift();
  }
}

readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop"]);
