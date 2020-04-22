function solve(inputFirstNumber, inputSecondNumber, operatorType) {
  let firstNumber = Number(inputFirstNumber);
  let secondNumber = Number(inputSecondNumber);
  let result = 0.0;
  let evenOrOdd = "";

  if (operatorType == "+") {
    result = firstNumber + secondNumber;
  } else if (operatorType == "-") {
    result = firstNumber - secondNumber;
  } else if (operatorType == "*") {
    result = firstNumber * secondNumber;
  } else if (operatorType == "/") {
    result = firstNumber / secondNumber;
  } else if (operatorType == "%") {
    result = firstNumber % secondNumber;
  }

  if (result % 2 == 0) {
    evenOrOdd = "even";
  } else {
    evenOrOdd = "odd";
  }

  if (secondNumber == 0) {
    console.log(`Cannot divide ${firstNumber} by zero`);
  }

  if (operatorType == "+" || operatorType == "-" || operatorType == "*") {
    console.log(
      `${firstNumber} ${operatorType} ${secondNumber} = ${result} - ${evenOrOdd}`
    );
  } else if (operatorType == "/" && secondNumber != 0) {
    console.log(
      `${firstNumber} ${operatorType} ${secondNumber} = ${result.toFixed(2)}`
    );
  } else if (operatorType == "%" && secondNumber != 0) {
    console.log(`${firstNumber} ${operatorType} ${secondNumber} = ${result}`);
  }
}

solve(10, 0, "%");
