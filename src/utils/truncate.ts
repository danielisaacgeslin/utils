export const truncate = (str: string, maxLength: number, elipsis: string = '...'): string => {
  if (str.length < maxLength) return str;
  else return `${str.substring(0, maxLength)}${elipsis}`;
};
