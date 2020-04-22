function yardGreening(squareMeters) {
  let initialPrice = squareMeters * 7.61;
  let discount = 0.18 * initialPrice;
  let finalPrice = initialPrice - discount;

  console.log(`The final price is: ${finalPrice.toFixed(2)} lv.`);
  console.log(`The discount is: ${discount.toFixed(2)} lv.`);
}
