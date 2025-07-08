export function getDiscountAmount(price: number, discountPercent: number): number {
  if (typeof price !== "number" || typeof discountPercent !== "number") {
    return 0;
  }
  if (price < 0 || discountPercent < 0 || discountPercent > 100) {
    return 0;
}

  const discount = price * (discountPercent / 100);
  return Math.round(discount * 100) / 100; // rounded to 2 decimal places
}