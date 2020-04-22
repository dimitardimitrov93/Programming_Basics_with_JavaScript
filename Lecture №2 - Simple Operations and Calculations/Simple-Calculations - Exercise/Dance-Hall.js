function solve(hallLength, hallWidth, wardrobeSide) {

    hallLength = Number(hallLength);
    hallWidth = Number(hallWidth);
    wardrobeSide = Number(wardrobeSide);

    let totalSpace = (hallLength * 100) * (hallWidth * 100);

    wholeWardrobe = (wardrobeSide * 100) * (wardrobeSide * 100);
    bench = totalSpace / 10;

    spaceForHumans = totalSpace - wholeWardrobe - bench;
    dancersNumber = Math.floor(spaceForHumans / (40 + 7000));

    console.log(dancersNumber);
    
}

solve(50, 25, 2);