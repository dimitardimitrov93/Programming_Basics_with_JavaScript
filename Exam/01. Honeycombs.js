function solve(beesNumInput, flowersNumInput) {
  let beesNum = Number(beesNumInput);
  let flowersNum = Number(flowersNumInput);

  let producedHoney = beesNum * flowersNum * 0.21;

  let honeycombs = Math.floor(producedHoney / 100);
  let honey = (producedHoney % 100).toFixed(2);

  console.log(`${honeycombs} honeycombs filled.`);
  console.log(`${honey} grams of honey left.`);
}

solve(11, 120);
