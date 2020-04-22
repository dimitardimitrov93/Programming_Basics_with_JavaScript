function solve(input) {
  let stadiumCapacity = Number(input.shift());
  let fansNum = Number(input.shift());
  let sector = input.shift();

  let sectorA = 0;
  let sectorB = 0;
  let sectorG = 0;
  let sectorV = 0;

  let percentSectorA = 0;
  let percentSectorB = 0;
  let percentSectorG = 0;
  let percentSectorV = 0;

  let percentFans = ((fansNum / stadiumCapacity) * 100).toFixed(2);

  for (let i = 0; i < fansNum; i++) {
    switch (sector) {
      case "A":
        sectorA++;
        break;
      case "B":
        sectorB++;
        break;
      case "G":
        sectorG++;
        break;
      case "V":
        sectorV++;
        break;
    }

    sector = input.shift();
  }

  percentSectorA = ((sectorA / fansNum) * 100).toFixed(2);
  percentSectorB = ((sectorB / fansNum) * 100).toFixed(2);
  percentSectorG = ((sectorG / fansNum) * 100).toFixed(2);
  percentSectorV = ((sectorV / fansNum) * 100).toFixed(2);

  console.log(`${percentSectorA}%`);
  console.log(`${percentSectorB}%`);
  console.log(`${percentSectorV}%`);
  console.log(`${percentSectorG}%`);
  console.log(`${percentFans}%`);
}

solve(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);
