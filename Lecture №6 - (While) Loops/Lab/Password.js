function login(input) {
  let username = input.shift();
  let password = input.shift();

  let inputData = input.shift();

  while (inputData != password) {
    inputData = input.shift();
  }

  console.log(`Welcome ${username}!`);
}

login(["Nakov", "1234", "pass", "1324", "1234"]);
