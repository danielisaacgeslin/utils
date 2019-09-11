export const isAcronym = (str: string): boolean => {
  if (typeof str !== 'string') return false;
  return str.toUpperCase() === str;
};
