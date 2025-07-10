export const isWithin2HoursOrPassed = (rentStartTime: string): boolean => {
  const now = Date.now();
  const rentStart = new Date(rentStartTime).getTime();

  const twoHoursInMs = 2 * 60 * 60 * 1000;

  // true if now >= rentStart - 2h
  return now >= rentStart - twoHoursInMs;
};
