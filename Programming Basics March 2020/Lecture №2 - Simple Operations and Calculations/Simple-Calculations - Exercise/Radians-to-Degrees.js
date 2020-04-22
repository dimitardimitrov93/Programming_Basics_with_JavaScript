function solve(radians) {
  radians = Number(radians);
  let result = (radians * 180) / Math.PI;

  console.log(result.toFixed(0));
}
