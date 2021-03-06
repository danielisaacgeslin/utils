export const generateHslColor = (seed: number, amount: number): string[] => {
  const huedelta = Math.trunc(360 / amount * seed);
  return Array.from(Array(amount))
    .map((_, index) => `hsl(${index * huedelta},100%,${seed * (85 - 65) + 65}%)`);
};
