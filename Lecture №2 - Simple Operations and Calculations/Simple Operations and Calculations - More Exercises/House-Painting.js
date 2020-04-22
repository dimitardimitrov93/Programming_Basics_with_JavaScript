function housePainting(inputX, inputY, inputH) {

    let x = Number(inputX);
    let y = Number(inputY);
    let h = Number(inputH);
    // Sides
    let doorSqM = 1.2 * 2;
    let windowSqM = 1.5 * 1.5;

    let frontSideSqM = (x * x) - doorSqM;
    let backSideSqM = x * x;
    let leftSideSqM = (x * y) - windowSqM;
    let rightSideSqM = leftSideSqM;
    // Roof
    let topLeftSideSqM = x * y;
    let topRightSideSqM =  topLeftSideSqM;

    let topFrontTriangleSqM = (x * h) / 2;
    let topBackTriangleSqM = topFrontTriangleSqM;

    let totalSidesSqM = frontSideSqM + backSideSqM + leftSideSqM + rightSideSqM;
    let totalRoofSqM = topLeftSideSqM + topRightSideSqM + topFrontTriangleSqM + topBackTriangleSqM;

    let greenPaint = (totalSidesSqM / 3.4).toFixed(2);
    let redPaint = (totalRoofSqM / 4.3).toFixed(2);

    console.log(greenPaint);
    console.log(redPaint);

}

housePainting (6, 10, 5.2);