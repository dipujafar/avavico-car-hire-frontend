export function getDiscountAmount(price: number, discountPercent: number): number {
  if (typeof price !== "number" || typeof discountPercent !== "number") {
    throw new Error("Both price and discount must be numbers.");
  }
  if (price < 0 || discountPercent < 0 || discountPercent > 100) {
    throw new Error("Invalid price or discount percent value.");
  }

  const discount = price * (discountPercent / 100);
  return Math.round(discount * 100) / 100; // rounded to 2 decimal places
}