function solve(input) {
  let targetSteps = 10000;
  let currentSteps = input.shift();
  let totalSteps = 0;
  let difference = 0;

  while (totalSteps < targetSteps) {
    if (currentSteps != "Going home") {
      currentSteps = Number(currentSteps);
      totalSteps += currentSteps;
    } else {
      currentSteps = Number(input.shift());
      totalSteps += currentSteps;
      break;
    }
    currentSteps = input.shift();
  }

  difference = Math.abs(totalSteps - targetSteps);

  if (totalSteps >= targetSteps) {
    console.log(`Goal reached! Good job!`);
  } else {
    console.log(`${difference} more steps to reach goal.`);
  }
}

solve(["1500", "300", "2500", "3000", "Going home", "200"]);
solve(["1000", "1500", "2000", "6500"]);
