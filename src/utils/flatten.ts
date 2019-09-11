export const flatten = <T>(arr: T[][]): T[] => arr.reduce((total, curr) => [...total, ...curr], []);
