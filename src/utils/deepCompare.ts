const isObject = (v: any) => typeof v === 'object' && v !== null;
const getLength = (v: { [key: string]: any } | any[]): number => Object.values(v).length;

export const deepCompare = (a: any, b: any): boolean => {
  const shouldLoop = isObject(a) && isObject(b);
  if (!shouldLoop || a === b) return a === b;
  if (getLength(a) !== getLength(b)) return false;

  for (const key in a) if (!deepCompare(a[key], b[key])) return false;

  return true;
};
