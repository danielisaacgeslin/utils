export const parseUrlSearch = <T = { [key: string]: string }>(search: string, initialValue: T = {} as any): T => (
  search.replace('?', '').split('&').map(s => s.split('=')).reduce((total, [key, value]) => ({
    ...total,
    [key]: value
  }), initialValue)
);
